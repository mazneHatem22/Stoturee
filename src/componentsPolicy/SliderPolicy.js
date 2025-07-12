import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import svg from "../images/Asset 12.svg";
import { Container } from "react-bootstrap";

const SliderPolicy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="background-policy">
      <Container>
        {location.pathname !== "/" && (
          <img
            className="arrow-style"
            src={svg}
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ backgroundColor: "#00000069", borderRadius: "50px" }}
          />
        )}

        <div className="d-flex justify-content-center align-items-center  about-text-groub">
          <div>
            <h1 style={{ color: "black" }} className="text-center about-text">
              Privacy Policy{" "}
            </h1>
            <p style={{ color: "black" }} className="text-center mt-3 p-text">
              We are committed to protecting your personal information
              <br />
              Read our Privacy Policy to learn more.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderPolicy;
