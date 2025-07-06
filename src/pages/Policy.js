import React from 'react'
import SliderPolicy from '../componentsPolicy/SliderPolicy'
import TextPolicy from '../componentsPolicy/TextPolicy'
import StepPolicy from '../componentsPolicy/StepPolicy'
import Footer from '../componentsHome/Footer'
import ScrollTop from '../componentsHome/ScrollTop'

const Policy = () => {
  return (
    <div>
        <SliderPolicy/>
        <TextPolicy/>
        <StepPolicy/>
        <ScrollTop/>
        <Footer/>
    </div>
  )
}

export default Policy