import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Us = () => {
  return (
    <div className='mt-5' >
        <Container>
            <h1 style={{color:"#08101d" , fontWeight:"700"}}>Ready to take your <br/> creative step to future</h1>
            <Button style={{fontWeight:"bold"}} className="click2 mt-4" variant="primary">Contact Us</Button>{' '}
        </Container>
    </div>
  )
}

export default Us