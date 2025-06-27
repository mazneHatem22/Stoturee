import React from "react";
import { Container } from "react-bootstrap";
import Us from "../images2/Asset 111.svg"

const StepPolicy = () => {
  return (
    <div className="mt-5">
      <Container>
        <h1 style={{ color: "#08101d", fontWeight: "700" }}>
          Redady to take your <br /> creative step to future
        </h1>
        <img className="mt-3" style={{width:"170px"}} src={Us} alt=""/>
      </Container>
    </div>
  );
};

export default StepPolicy; 
