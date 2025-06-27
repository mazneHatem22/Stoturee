import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cemart1 from "../images/Cemart-01.png";

const ProjectCermart = () => {
  return (
    <div className="project-cermart">
      <Container>
        <Row>
          <div>
            <img className="w-100" src={cemart1} alt="" />
          </div>
          <Col lg="6" md="12">
            <div className="mt-5">
              <p>Client</p>
              <h5>Cemar</h5>
            </div>
            <div className="mt-3">
              <p>Services</p>
              <h5>Branding & Social media marketing</h5>
            </div>
          </Col>
          <Col lg="6" md="12">
            <div className="mt-5">
              <h6>
                An innovative company that produces and distributes eco friendly
                building materials. They prioritize sustainability and leverage
                scientific research to offer high-quality, environmentally
                conscious products
              </h6>
            </div>

            <div className="mt-5">
              <h6>
                Their goal is to help create more sustainable and livable cities <br/>
                through the use of green materials and techniques.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectCermart;
