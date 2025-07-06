import React from 'react'
import SliderContact from '../componentsContact/SliderContact'
import InTouch from '../componentsContact/InTouch'
import Feartured from '../componentsContact/Feartured'
import Step from '../componentsContact/Step'
import Footer from '../componentsHome/Footer'
import ScrollTop from '../componentsHome/ScrollTop'

const ContactUs = () => {
  return (
    <div>
        <SliderContact/>
        <InTouch/>
        <Feartured/>
        <Step/>
        <ScrollTop/>
        <Footer/>
    </div>
  )
}

export default ContactUs