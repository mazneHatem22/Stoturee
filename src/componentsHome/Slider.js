import React from "react";
import photo1 from "../images2/Home-Page-1.jpg";
import photo2 from "../images2/Home-Page-2.jpg";
import photo3 from "../images2/Home-Page-3.jpg";
import photo4 from "../images2/Home-Page-4.jpg";
import ground from "../images2/Group.png";

import Flickity from "react-flickity-component";
import "../flickity.css";
import { Button, Col, Container, Row } from "react-bootstrap";
const flickityOptions = {
  initialIndex: 0,
  wrapAround: false,
  autoPlay: false,
};

const FlickityBackgroundExample = () => {
  const slides = [
    {
      image: photo1,
      heading: "Step to creative future",
      paragraph: "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
    {
      image: photo2,
      heading: "Step to creative future",
      paragraph: "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
    {
      image: photo3,
      heading: "Step to creative future",
      paragraph: "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
    {
      image: photo4,
      heading: "Step to creative future",
      paragraph: "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
  ];
  return (
    <>
    <Flickity 
      className={"carousel"} // Optional carousel class
      elementType={"div"} // Set element type (default 'div')
      options={flickityOptions} // Pass Flickity options
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="carousel-cell"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", // Adjust slide height
            width: "100%", // Adjust slide width
          }}
        >
          {/* You can add overlay content if needed */}
          <div className={'carousel-content' + " " + 'carousel' + index}>
            <Container>
               <div className="carousel-text">
            <h1 className="step mb-1">{slide.heading}</h1>
            <p className="paragraph-home">{slide.paragraph}</p>
            </div>

            </Container>
           
            <Button className="click" variant="outline-light">{slide.buttonText}</Button>{' '}
          </div>
        </div>
      ))}
    </Flickity>
    <Container className="mt-5">
      <Row>
        <Col lg={12} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <img className="w-100" src={ground} alt="Ground"/>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default FlickityBackgroundExample;
