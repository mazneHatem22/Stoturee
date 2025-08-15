import React from 'react'
import { Container } from 'react-bootstrap'
import Cemartidentity1 from '../images2/Cemartidentity1.jpg'
import Cemartidentity2 from '../images2/Cemartidentity2.jpg'
import Cemartidentity3 from '../images2/Cemartidentity3.jpg'
import Cemartidentity4 from '../images2/Cemartidentity4.jpg'
import Cemartidentity5 from '../images2/Cemartidentity5.jpg'
import Cemartidentity6 from '../images2/Cemartidentity6.jpg'
import Cemartidentity7 from '../images2/Cemartidentity7.jpg'
import Cemartidentity8 from '../images2/Cemartidentity8.jpg'
import Cemartidentity9 from '../images2/Cemartidentity9.jpg'

const PhotosCemartidentity = () => {
  return (
    <Container>
        <div className='row'>
            <div className='col-12'data-aos="fade-up"  data-aos-duration="1000">
                <div className='mt-3' >
                    <img className='w-100' src={Cemartidentity1} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity2} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity3} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity4} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity5} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity6} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity7} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity8} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Cemartidentity9} alt=''/>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default PhotosCemartidentity