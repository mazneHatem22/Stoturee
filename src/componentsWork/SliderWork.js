import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../images/Asset 12.svg"


const SliderWork = () => {
  return (
    <div className='background2 position-relative'>
        <Link to={"/"}>
        <div className='icon-about'> <img className='' src={svg} alt=''/></div>
        </Link>
        
        <div className='d-flex justify-content-center align-items-center h-100 about-text-groub'>
            <div>
            <h1 className='text-center about-text'>Our Work</h1>
            <p className='text-center mt-3 p-text text-work'>We transform your ideas into innovative visual experiences
                that showcase <br/> your vision with a creative and distinctive touch.
            </p>
             
             
            </div>
            
        </div>
    </div>
  )
}

export default SliderWork