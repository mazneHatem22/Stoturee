import React from 'react'
import { Container } from 'react-bootstrap'
import Pil1 from '../images2/All Photos3-46.jpg'
import Pil2 from '../images2/All Photos3-47.jpg'
import Pil3 from '../images2/All Photos3-48.jpg'


const PhotosPIL = () => {
  return (
    <Container>
        <div className='row'>
            <div className='col-12'data-aos="fade-up"  data-aos-duration="1000">
                <div className='mt-3' >
                    <img className='w-100' src={Pil1} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Pil2} alt=''/>
                </div>
                <div className='mt-3'>
                    <img className='w-100' src={Pil3} alt=''/>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default PhotosPIL