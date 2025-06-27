import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../images/Asset 12.svg"

const SliderAbout = () => {
  return (
    <div className='background position-relative'>
        <Link to={"/"}>
        <div className='icon-about'> <img className='' src={svg} alt=''/></div>
        </Link>
        
        <div className='d-flex justify-content-center align-items-center h-100  about-text-groub'>
            <div>
            <h1 className='text-center about-text'>About Us</h1>
            <p className='text-center mt-3 p-text'>Stoture is a marketing and visual content production company 
              <br/>  that helps you achieve your ambitions</p>
             
             
            </div>
            
        </div>
    </div>
  )
}

export default SliderAbout