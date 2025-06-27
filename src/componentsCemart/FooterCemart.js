import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FooterCemart = () => {
  return (
    <div className="footer-png mt-4 ">
      <Container>
        <div className="icc-text">
          <div>
            <h2 style={{ color: "white" }}>
              Next <br />
              Project
            </h2>
            <h1>ICC</h1>
          </div>
          <div className="link-groub">
            <Row>
              <Col lg="2" md="2" sm="12">
                <h4>Linkedin</h4>
              </Col>
              <Col lg="2" md="2" sm="12">
                <h4>Instagram</h4>
              </Col>
              <Col lg="2" md="2" sm="12">
                <h4>Behance</h4>
              </Col>
              <Col lg="2" md="2" sm="12">
                <h4>Facebook</h4>
              </Col>
              <Col lg="4" md="4" sm="12">
                <div style={{ right: "0" }} className="emal position-absolute">
                  <h6>stoture.media@gmail.com</h6>
                  <div style={{ fontSize: "10px" }} className="d-flex">
                    <p className="mx-3 ">Terms & Conditions</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterCemart;

/* <Col lg="7" md="7" sm="12">
              <div
                style={{ color: "black" }}
                className="d-flex align-items-center justify-content-between"
              >
                <h2>LinkedIn</h2>
                <h2>Instagram</h2>
                <h2>Behance</h2>
                <h2>Facebook</h2>
              </div>
            </Col>
            <Col lg="5" md="5" sm="12">
              <h6>stoture.media@gmail.com</h6>
              <div className="d-flex align-items-center ">
                <p className="mx-3">Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </Col> */

// <div className='footer-group'>
// <div className='d-flex justify-content-between'>
//     <div className='d-flex link-text'>
//         <h4 className='mx-4'>Linkedin</h4>
//         <h4 className='mx-4'>Instagram</h4>
//         <h4 className='mx-4'>Behance</h4>
//         <h4 className='mx-4'>Faceboox</h4>
//     </div>
//     <div>
//         <h6>Stoture.media@gmail.com</h6>
//         <div className='d-flex'>
//         <p className='mx-3'>Tems & Cond</p>
//         <p>privacy poky</p>

//         </div>

//     </div>
// </div>
// </div>
