import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import story from "../images/Stoture Web work 2-08.png"

const OurBranding = () => {
  return (
    <div className="our-group">
      <div className="mt-5">
        <Container>
          <Row>
            <Col lg="6" md="12" className="mt-5">
              <h1 className="mt-4">Our Brand <br/> Story</h1>
              <p className="mt-4">
                Our journey began in 2021 as a startup offering design, <br/>
                photography, and media services, where we provided <br/> creative
                solutions to meet our clients' needs.
              </p>
              <p className="mt-4">
                Over time, and with the success of our projects, we moved <br/> to
                Dubai to expand our services and provide a <br/> comprehensive
                experience that reflects the unique identity <br/> of each client.
              </p>
              <p className="mt-4">
                What sets Stoture apart is our commitment to quality and <br/>
                flexibility, as we work according to well-thought-out <br/> strategies
                and clear plans that ensure the achievement of <br/> our clients'
                ambitions. We do not just provide designs; we <br/> build visual
                stories that inspire and highlight our clients'<br/> visions.
              </p>
            </Col>
            <Col lg="6" md="12" className="mt-5">
            <img style={{borderRadius:"15px"}} className="w-75 h-100 " src={story} alt=""/>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurBranding;
