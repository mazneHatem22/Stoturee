import React from "react";
import photo1 from "../images2/Home-Page-1.jpg";
import photo2 from "../images2/Home-Page-2.jpg";
import photo3 from "../images2/Home-Page-3.jpg";
import photo4 from "../images2/Home-Page-4.jpg";

import Flickity from "react-flickity-component";
import "../flickity.css";
import { Button } from "react-bootstrap";
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
            <div className="carousel-text">
            <h1 className="step">{slide.heading}</h1>
            <p className="paragraph-home">{slide.paragraph}</p>
            </div>
            <Button className="click" variant="outline-light">{slide.buttonText}</Button>{' '}
          </div>
        </div>
      ))}
    </Flickity>
  );
};

export default FlickityBackgroundExample;
