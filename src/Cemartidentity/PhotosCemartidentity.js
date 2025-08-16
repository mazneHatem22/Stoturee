import React from 'react'
import { Container } from 'react-bootstrap'


const PhotosCemartidentity = ({data2}) => {
  return (
    <Container>
        <div className='row'>
            <div className='col-12'data-aos="fade-up"  data-aos-duration="1000">
                {data2.map((item, index) => {
            return (
              <div key={index} className="mt-3">
                <img className="w-100" src={item.img} alt=""/>
              </div>
            );
          })}
               
            </div>
        </div>
    </Container>
  )
}

export default PhotosCemartidentity