import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import svg from "../images/Asset 12.svg";

const SliderPromoContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="background-documentary position-relative">
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

        <div className="mt-4">
          <div>
            <h1 className="text-center project-text">Cemart Documentary</h1>
            <p className="text-center mb-0 mt-3 p-text">
              We documented a short documentary for Cemart, capturing the
              testing of their smart brick technology inside <br/> a certified
              laboratory in the UAE, highlighting its precision and reliability.
            </p>
          </div>
        </div>
        <div
          className="mt-5 position-absolute card-style">
          <div className=" d-flex justify-content-between text-center align-items-center promo-text">
            <p className="mb-0 " style={{ color: "#606060" }}>
              {" "}
              CLIENT: 
              <span className="fw-bold text-black ms-2"> Cemart</span>
            </p>
           <p className="mb-0 " style={{ color: "#606060" }}>
              {" "}
             YEAR: 
              <span className="fw-bold text-black ms-2"> 2024</span>
            </p>
            <p className="mb-0 " style={{ color: "#606060" }}>
              {" "}
             Project:
              <span className="fw-bold text-black ms-2">Video Production</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderPromoContent;
