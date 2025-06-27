import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <Container>
            <div className='footer-group'>

           
        <Row>
              <Col lg="2" md="2" sm="12">
                <h5>Linkedin</h5>
              </Col>
              <Col lg="2" md="2" sm="12">
                <h5>Instagram</h5>
              </Col>
              <Col lg="2" md="2" sm="12">
                <h5>Behance</h5>
              </Col>
              <Col lg="2" md="2" sm="12">
                <h5>Facebook</h5>
              </Col>
              <Col lg="4" md="4" sm="12">
                <div style={{ }} className="email position-absolute">
                  <h6> <a style={{color:"black"}} href='mailto:stoture.media@gmail.com'>stoture.media@gmail.com</a></h6>
                  <div style={{ fontSize: "10px" }} className="d-flex">
                    
                    <Link to={"/terms"}> 
                    <p style={{color:"black"}} className="mx-3 ">Terms & Conditions</p>
                    </Link>
                    <Link to={"/policy"}>
                    <p style={{color:"black"}}>Privacy Policy</p>
                    </Link>
                   
                  </div>
                </div>
              </Col>
            </Row>
            </div>

        </Container>
    </div>
  )
}

export default Footer




/* <div className='footer-group'>
<div className='d-flex justify-content-between'>
    <div className='d-flex link-text'>
        <h5 className='mx-4'>Linkedin</h5>
        <h5 className='mx-4'>Instagram</h5>
        <h5 className='mx-4'>Behance</h5>
        <h5 className='mx-4'>Faceboox</h5>
    </div>
    <div>
        <h6>Stoture.media@gmail.com</h6>
        <div className='d-flex'>
        <p className='mx-3'>Tems & Cond</p>
        <p>privacy poky</p>

        </div>
        
    </div>
</div>
</div> */