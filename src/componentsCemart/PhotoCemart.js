import React from 'react'
import { Container } from 'react-bootstrap'
import cemart2 from "../images/Cemart-02.png";
import cemart3 from "../images/Cemart-03.png";
import cemart4 from "../images/Cemart-04.png";
import cemart5 from "../images/Cemart-05.png";
import cemart6 from "../images/Cemart-06.png";
import cemart10 from "../images/Cemart-10.png";
import cemart8 from "../images/Cemart-08.png";
import cemart9 from "../images/Cemart-09.png";

const PhotoCemart = () => {
  return (
    <div className='photo-group'>
        <Container>
            <div>
                <img className='w-100' src={cemart3} alt=''/>
            </div>
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart2} alt=''/>
            </div>
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart4} alt=''/>
            </div>
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart5} alt=''/>
            </div>
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart6} alt=''/>
            </div>
           
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart8} alt=''/>
            </div>
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart10} alt=''/>
            </div>
            <div>
                <img style={{borderRadius:"10px"}} className='w-100 mt-4' src={cemart9} alt=''/>
            </div>
        </Container>
    </div>
  )
}

export default PhotoCemart