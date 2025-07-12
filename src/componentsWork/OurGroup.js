import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import copy1 from "../images2/Screenshot1.png";
import copy2 from "../images2/Screenshot2.png";
import copy3 from "../images2/Screenshot3.png";
import copy4 from "../images2/Screenshot4.png";
import { Link } from "react-router-dom";


const OurGroup = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6" md="12" className="mt-3" data-aos="fade-down-right" data-aos-duration="2000" >
          <Link to={"/PromoContent-DWOC"}>
           <div style={{color: "black"}}>
             <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy1}
                alt=""
              />
              <h4 className="mt-3">Promo Contact-DWOC</h4>
              <p>Video Production</p>

          </div>

          </Link>
         
          </Col>
          <Col lg="6" md="12" className="mt-3" data-aos="fade-down-left" data-aos-duration="2000">
          <Link to={"/DOWC-Highlights"}>
            <div style={{color: "black"}}>
             <img
                style={{ borderRadius: "20px" }}
                className="w-100"
                src={copy2}
                alt=""
              />
              <h4 className="mt-3">DOWC Highlights</h4>
              <p>Event Coverage</p>

          </div>
          </Link>
        
          </Col>
          <Col lg="6" md="12" className="mt-3" data-aos="fade-down-right" data-aos-duration="2000">
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
          <Col lg="6" md="12" className="mt-3" data-aos="fade-down-left" data-aos-duration="2000">
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