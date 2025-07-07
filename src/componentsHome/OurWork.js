import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import jpg2 from "../images2/png1.jpg"
import jpg3 from "../images2/png2.jpg"
import jpg4 from "../images2/png3.jpg"
import jpg5 from "../images2/png4.jpg"
import jpg6 from "../images2/png5.jpg"

const OurWork = () => {
  return (
   
    <div>
        <Container>
            <Row>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <div>
                        <h3>Our Work</h3>
                    </div>
                    <div>
                    <Button style={{fontSize:"15px"}}  className="click2 mt-4" variant="outline-dark">View All</Button>{' '}
                    </div>
                </div>
                <Col lg="4" md="4" sm="12" className='mt-4'>
                <img style={{borderRadius:"20px"}} className='w-100 ' src={jpg2} alt=''/>
                <img style={{borderRadius:"20px"}} className='w-100 mt-5' src={jpg3} alt=''/>
                </Col>
                <Col lg="4" md="4" sm="12" className='mt-4'>
                <img style={{borderRadius:"20px"}} className='w-100'  src={jpg4} alt=''/>
                </Col>
                <Col lg="4" md="4" sm="12" className='mt-4'>
                <img style={{borderRadius:"20px"}} className='w-100 ' src={jpg5} alt=''/>
                <img style={{borderRadius:"20px"}} className='w-100  mt-5' src={jpg6} alt=''/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurWork