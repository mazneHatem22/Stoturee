import React, { useEffect, useRef } from "react";
import photo1 from "../images2/Home-Page-1.jpg";
import photo2 from "../images2/Home-Page-2.jpg";
import photo3 from "../images2/Home-Page-3.jpg";
import photo4 from "../images2/Home-Page-4.jpg";

import Flickity from "react-flickity-component";
import "../flickity.css";
import { Button, Container } from "react-bootstrap";
const flickityOptions = {
  initialIndex: 0,
  wrapAround: false,
  autoPlay: false,
};

const Slider = ({ onReady }) => {
  const flickityRef = useRef(null);

  const slides = [
    {
      image: photo1,
      heading: "Step to creative future",
      paragraph:
        "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
    {
      image: photo2,
      heading: "Step to creative future",
      paragraph:
        "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
    {
      image: photo3,
      heading: "Step to creative future",
      paragraph:
        "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
    {
      image: photo4,
      heading: "Step to creative future",
      paragraph:
        "Stoture is a marketing and visual content production company that helps you achieve your ambitions",

      buttonText: "Lets Talk",
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onReady) onReady();
    }, 100);

    return () => clearTimeout(timeout);
  }, [onReady]);

  return (
    <>
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        flickityRef={(ref) => (flickityRef.current = ref)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-cell"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <div className={`carousel-content carousel${index}`}>
              <Container>
                <div className="carousel-text">
                  <h1 className="step mb-1">{slide.heading}</h1>
                  <p className="paragraph-home">{slide.paragraph}</p>
                </div>
              </Container>
              <Button className="click" variant="outline-light">
                {slide.buttonText}
              </Button>{" "}
            </div>
          </div>
        ))}
      </Flickity>
    </>
  );
};

export default Slider;
