import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Branding = () => {
  return (
    <div className='mt-5'>
        <Container>
            <Row>
                <Col lg="6" md="12" data-aos="fade-right" data-aos-duration="1000">
                <h1 style={{fontSize:"36px"}}>Branding Goes Beyond  Just Design</h1>
                </Col>
                <Col lg="6" md="12" data-aos="fade-left" data-aos-duration="1000">
                <p style={{fontWeight:"500"}}>At Stoture, we do not limit ourselves to providing creative designs; instead, we focus on creating a comprehensive brand experience that reflects a unique identity and a lasting story. We strive to build a visual identity that inspires, highlights your vision, and translates your aspirations into tangible reality.</p>
                <p style={{fontWeight:"500"}}>At Stoture, we offer integrated and comprehensive solutions, working according to precise strategic plans and well-considered practical steps. Our goal is to help you develop your place, whether through enhancing visual identity, designing visual content, or improving user interface and experience. Every step we take together is a "step towards a creative future," where excellence is embodied in every detail, contributing to enhancing your position in your field.
                </p>
                <p style={{fontWeight:"500"}}>We are here to put you in the forefront and help you achieve your ambitions through innovative and integrated methods, ensuring that your brand always stands out and shines.
                </p>
                <h6 style={{fontWeight:"bold"}}>A Creative Future: Where every interaction reflects the strength of your story and vision.</h6>
                
               
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Branding