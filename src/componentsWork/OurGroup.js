import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import copy1 from "../images2/Screenshot1.png";
import copy2 from "../images2/Screenshot2.jpg";
import copy3 from "../images2/Screenshot3.png";
import copy4 from "../images2/Screenshot4.png";


const OurGroup = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6" md="12" className="mt-3" >
          <div>
             <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy1}
                alt=""
              />
              <h4 className="mt-3">Promo Contact-DWOC</h4>
              <p>Video Production</p>

          </div>
          </Col>
          <Col lg="6" md="12" className="mt-3" >
          <div>
             <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy2}
                alt=""
              />
              <h4 className="mt-3">DOWC Highlights</h4>
              <p>Event Coverage</p>

          </div>
          </Col>
          <Col lg="6" md="12" className="mt-3" >
          <div>
             <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy3}
                alt=""
              />
              <h4 className="mt-3">Executive Initiatives Office – Dubai Police</h4>
              <p>Video Production</p>

          </div>
          </Col>
          <Col lg="6" md="12" className="mt-3" >
          <div>
             <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy4}
                alt=""
              />
              <h4 className="mt-3">Cemart Documentary</h4>
              <p>Video Production</p>

          </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default OurGroup;


 {/* <Col lg="6" md="12" className="cemart-group">
            <div>
              <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy1}
                alt=""
              />
              <div className="d-flex mt-3">
                <h4>Nourish me</h4>
                <span style={{ fontSize: "13px" }} className="mt-2">
                  .HEPN
                </span>
              </div>
              <p>Branding</p>
            </div>

            <div>
              <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy3}
                alt=""
              />

              <h4 className="mt-3">ICC</h4>
              <p>Branding</p>
            </div>

            <div>
              <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy5}
                alt=""
              />

              <h4 className="mt-3">Cemart Documentary </h4>

              <p>Video production </p>
            </div>
          </Col>

          <Col lg="6" md="12" className="cemart-group">
            <div>
              <Link to={"/cemart"}>
              <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy2}
                alt=""
              />
              </Link>

              <h4>Cemart Group </h4>

              <p>Rebranding</p>
            </div>

            <div className="mt-5">
              <img
                style={{ borderRadius: "20px", marginTop:"35px" }}
                className="w-100"
                src={copy4}
                alt=""
              />

              <h4 className="mt-3">TID</h4>
              <p>Branding</p>
            </div>

            <div>
              <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy6}
                alt=""
              />

              <h4 className="mt-3">The Most 5000 C.E.Phrases </h4>

              <p>Book Design</p>
            </div>
          </Col> */}