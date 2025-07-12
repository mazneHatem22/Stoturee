import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ground from "../images2/Group.png";

const SecondBanner = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={12} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <img className="w-100" src={ground} alt="Ground" />
        </Col>
      </Row>
    </Container>
  );
};

export default SecondBanner;
