import React from 'react'
import { Container } from 'react-bootstrap'
import Highlights1 from "../images2/Highlights1.png"
import Highlights2 from "../images2/Highlights2.png"
import Highlights3 from "../images2/Highlights3.png"
import Highlights4 from "../images2/Highlights4.png"
import Highlights5 from "../images2/Highlights5.png"
import Highlights6 from "../images2/Highlights6.png"


function VidosProject2() {
  return (
    <>
    <Container className='mt-5'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 mt-3'>
                <div className='h-100'>
                    <img className='w-100 h-100' src={Highlights1} alt=''/>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-6 mt-3'>
                <div className='h-100'>
                    <img className='w-100 h-100' src={Highlights2} alt=''/>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-6 mt-3'>
                <div className='h-100'>
                    <img className='w-100 h-100' src={Highlights3} alt=''/>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-6 mt-3'>
                <div className='h-100'>
                    <img className='w-100 h-100' src={Highlights4} alt=''/>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 col-6 mt-3'>
                <div className='h-100'>
                    <img className='w-100 h-100' src={Highlights5} alt=''/>
                </div>
            </div>



            <div className='col-lg-6 col-md-6 col-12 mt-3'>
                <div className='h-100'>
                    <img className='w-100 h-100' src={Highlights6} alt=''/>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default VidosProject2