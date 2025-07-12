import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../images/Asset 12.svg"
import { Container } from 'react-bootstrap'

const SliderPolicy = () => {
  return (
    <div className='background-policy'>
      <Container>
        <Link to={"/"}>
        <img className='arrow-style'  style={{backgroundColor:"#00000069" , borderRadius:"50px"}} src={svg} alt=''/>
    </Link>
    
    <div className='d-flex justify-content-center align-items-center  about-text-groub'>
        <div>
        <h1 style={{color: 'black'}} className='text-center about-text'>Privacy Policy </h1>
        <p style={{color: 'black'}} className='text-center mt-3 p-text'>We are committed to protecting your personal information
            <br/>Read our Privacy Policy to learn more. 
        </p>
         
         
        </div>
        
    </div>

      </Container>
    
</div>
  )
}

export default SliderPolicy