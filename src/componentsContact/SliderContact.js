import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../images2/Asset 2.svg"
import { Container } from 'react-bootstrap'

const SliderContact = () => {
  return (
    <div className='background-conatct'>
      <Container>
         <Link to={"/"}>
       <img className='arrow-style'  src={svg} alt=''/>
        </Link>
        
        <div className='d-flex justify-content-center align-items-center about-text-groub'>
            <div>
            <h1 className='text-center about-text'>Contact us</h1>
            <p className='text-center mt-3 p-text text-work'>Were here to dive into your brands journey and
               uncover  <br/> strategies to meet your business goals.
            </p>
             
             
            </div>
            
        </div>

      </Container>
       
    </div>
  )
}

export default SliderContact