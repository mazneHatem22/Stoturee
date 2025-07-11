import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import svg from "../images/Asset 12.svg";
import { Container } from "react-bootstrap";

const SliderAbout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="background-about">
      <Container
        className="h-100"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        {location.pathname !== "/" && (
          <img
            className="arrow-style"
            src={svg}
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        )}

        <div className="d-flex justify-content-center align-items-center about-text-groub">
          <div>
            <h1 className="text-center about-text">About Us</h1>
            <p className="text-center mt-3 p-text">
              Stoture is a marketing and visual content production company
              <br /> that helps you achieve your ambitions
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderAbout;
