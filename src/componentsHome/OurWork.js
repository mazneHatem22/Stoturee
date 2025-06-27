import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import jpg2 from "../images2/02-idenix-branding-mockup.jpg"
import jpg3 from "../images2/SG_017_digital-billboard-copy.jpg"
import jpg4 from "../images2/Reel.jpg"
import jpg5 from "../images2/Outdoor-Signboard-Mockup.jpg"
import jpg6 from "../images2/book.jpg"

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
                    <Button style={{fontWeight:"bold"}} className="click2 mt-4" variant="outline-dark">View All</Button>{' '}
                    </div>
                </div>
                <Col lg="4" md="6" sm="12" className='mt-4'>
                <img style={{borderRadius:"20px"}} className='w-100 ' src={jpg2} alt=''/>
                <img style={{borderRadius:"20px"}} className='w-100 mt-4' src={jpg3} alt=''/>
                </Col>
                <Col lg="4" md="6" sm="12" className='mt-4'>
                <img style={{borderRadius:"20px", width:"85%"}} className=' mx-4'  src={jpg4} alt=''/>
                </Col>
                <Col lg="4" md="6" sm="12" className='mt-4'>
                <img style={{borderRadius:"20px"}} className='w-100 ' src={jpg5} alt=''/>
                <img style={{borderRadius:"20px"}} className='w-100 h-50  mt-4' src={jpg6} alt=''/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurWork