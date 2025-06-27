import React from "react";
import { Container } from "react-bootstrap";
import asset22 from "../images2/Asset 22.svg";

const InTouch = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="get d-flex  align-items-center  mt-5">
          <div>
            <h1 style={{ fontSize: "60px" }}>Get in touch</h1>
          </div>
          <div className="mx-4">
            <img style={{ width: "35px" }} src={asset22} alt="" />
          </div>
        </div>
        <div className="num d-flex justify-content-between  align-items-center  mt-5">
          <div>
            <h4>Numbers</h4>
          </div>
          <div>
            <h4 style={{color:"#9e9e9e"}}>+97150 936 9323</h4>
          </div>
        </div>
        <div className="new d-flex justify-content-between  align-items-center mt-5">
          <div>
            <h4>New business</h4>
          </div>
          <div>
            <h4>  <a style={{color:"#9e9e9e"}} href="mailto:info@stoture.com"> info@stoture.com</a></h4>
          </div>
        </div>
        <div className="d-flex justify-content-between  align-items-center mt-5">
          <div>
            <h4>Careers</h4>
          </div>
          <div>
            <h4 > <a style={{color:"#9e9e9e"}} href="mailto:Work@stoture.com">Work@stoture.com</a></h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InTouch;
