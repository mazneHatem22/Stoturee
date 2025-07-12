import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import svg from "../images/Asset 12.svg";

const SliderProject2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="background-highlights position-relative">
      <Container className="h-100">
        {location.pathname !== "/" && (
          <img
            className="arrow-style"
            src={svg}
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        )}

        <div
          className="d-flex justify-content-center align-items-center about-text-groub  position-absolute"
          style={{ width: "88%", transform: "translateY(50%)" }}
        >
          <div>
            <h1 className="text-center project-text">DOWC Highlights</h1>
            <p className="text-center mb-0 mt-3 p-text">
              We documented the first edition of the Dubai World Obstacle
              Championship through promotional videos and professional <br />{" "}
              photography, capturing the energy and excitement of the event.
            </p>
          </div>
        </div>
        <div
          className="mt-5 position-absolute"
          style={{
            backgroundColor: "#ffffff",
            padding: "30px ",
            width: "88%",
            bottom: "2px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div className=" d-flex justify-content-between text-center align-items-center promo-text text-black">
            <p className="mb-0">
              {" "}
              <span style={{ color: "#606060" }}>CLIENT: </span>DWOC
            </p>
            <p className="mb-0">
              <span style={{ color: "#606060" }}>YEAR: </span> 2024
            </p>
            <p className="mb-0">
              {" "}
              <span style={{ color: "#606060" }}>Project: </span> Event Coverage
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderProject2;
