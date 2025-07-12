import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import svg from "../images/Asset 12.svg"

const SliderPromoContent = () => {
  return (
      <div className='background-promo position-relative'>
      <Container className='h-100'>
         <Link to={"/work"}>
        <img className='arrow-style'  src={svg} alt=''/>
        </Link>
        
        <div className='d-flex justify-content-center align-items-center about-text-groub  position-absolute'
        style={{width:"88%" ,transform:"translateY(50%)"}}>
            <div >
            <h1 className='text-center project-text'>Promo Content – DWOC</h1>
            <p className='text-center mb-0 mt-3 p-text'>We created a series of high-impact promotional videos for the Dubai World Obstacle Championship,<br/>
bringing the intensity and passion of the competition to life through bold visual storytelling.</p>
             
             
            </div>
            
        </div>
        <div className='mt-5 position-absolute' style={{backgroundColor:"#ffffff" , padding:"30px 10px" ,width:"88%" , bottom:"2px" , left:"50%",transform:"translateX(-50%)" }}>
            <div className=' d-flex justify-content-between text-center align-items-center promo-text text-black'>
                <p className='mb-0'> <span style={{color:"#606060"}}>CLIENT: </span>DWOC</p>
                <p className='mb-0'><span style={{color:"#606060"}}>YEAR: </span> 2024</p>
                <p className='mb-0'> <span style={{color:"#606060"}}>Project: </span> Promo Content Production</p>
            </div>
        </div>

      </Container>
       
    </div>
  )
}

export default SliderPromoContent