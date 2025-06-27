import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../images2/Asset 2.svg"

const SliderContact = () => {
  return (
    <div className='background-conatct position-relative'>
        <Link to={"/"}>
        <div className='icon-about'> <img className='' src={svg} alt=''/></div>
        </Link>
        
        <div className='d-flex justify-content-center align-items-center h-100 about-text-groub'>
            <div>
            <h1 className='text-center about-text'>Contact us</h1>
            <p className='text-center mt-3 p-text text-work'>Were here to dive into your brands journey and
               uncover  <br/> strategies to meet your business goals.
            </p>
             
             
            </div>
            
        </div>
    </div>
  )
}

export default SliderContact