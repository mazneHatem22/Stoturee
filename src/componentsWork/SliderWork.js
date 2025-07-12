import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import svg from "../images/Asset 12.svg";
import { Container } from "react-bootstrap";

const SliderWork = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="background2">
      <Container data-aos="fade-down" data-aos-duration="2000">
        {location.pathname !== "/" && (
          <img
            className="arrow-style"
            src={svg}
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        )}

        <div className="d-flex justify-content-center align-items-center  about-text-groub">
          <div>
            <h1 className="text-center about-text">Our Work</h1>
            <p className="text-center mt-3 p-text text-work">
              We transform your ideas into innovative visual experiences that
              showcase <br /> your vision with a creative and distinctive touch.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderWork;
