import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import story from "../images2/B.png"

const OurBranding = () => {
  return (
    <div className="our-group mt-5">
      <div className="mt-5">
        <Container>
          <Row>
            <Col lg="6" md="12" className="mt-5">
              <h1 >Our Brand Story</h1>
              <div className="width-text">
                 <p className="mt-4">
                Our journey began in 2021 as a startup offering design,
                photography, and media services, where we provided  creative
                solutions to meet our clients' needs.
              </p>
              <p className="mt-4">
                Over time, and with the success of our projects, we moved  to
                Dubai to expand our services and provide a comprehensive
                experience that reflects the unique identity  of each client.
              </p>
              <p className="mt-4">
                What sets Stoture apart is our commitment to quality and 
                flexibility, as we work according to well-thought-out strategies
                and clear plans that ensure the achievement of  our clients'
                ambitions. We do not just provide designs; we build visual
                stories that inspire and highlight our clients'visions.
              </p>

              </div>
             
            </Col>
            <Col  lg="6" md="12" className="mt-5 ">
            <img style={{borderTopLeftRadius:"20px" ,borderTopRightRadius:"20px"}}  className="bg-white w-100 " src={story} alt=""/>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurBranding;
