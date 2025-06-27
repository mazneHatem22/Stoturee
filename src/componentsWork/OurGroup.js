import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import copy1 from "../images2/SG_017_digital-billboard-copy.jpg";
import copy2 from "../images2/Book-Cover-Mockup.jpg";
import copy3 from "../images2/02-idenix-branding-mockup.jpg";
import copy4 from "../images2/Booklet-Mockup-Sharp-Series-01.jpg";
import copy5 from "../images/Stoture Web work 2-07.png";
import copy6 from "../images2/book.jpg";
import { Link } from "react-router-dom";

const OurGroup = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6" md="12" className="cemart-group">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurGroup;
