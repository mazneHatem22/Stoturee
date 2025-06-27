import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../images/Asset 12.svg"

const SliderTerms = () => {
  return (
    <div className='background-policy position-relative'>
    <Link to={"/"}>
    <div className='icon-about-policy'> <img className='' src={svg} alt=''/></div>
    </Link>
    
    <div className='d-flex justify-content-center align-items-center h-100  about-text-groub'>
        <div>
        <h1 style={{color: 'black'}} className='text-center about-text'>Terms & Conditions</h1>
        <p style={{color: 'black'}} className='text-center mt-3 p-text'>We are committed to protecting your personal information
            <br/>Read our Privacy Policy to learn more. 
        </p>
         
         
        </div>
        
    </div>
</div>
  )
}

export default SliderTerms