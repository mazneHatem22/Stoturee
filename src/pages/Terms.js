import React from 'react'
import NavBarPolicy from '../componentsPolicy/NavBarPolicy'
import SliderTerms from '../componentsTerms/SliderTerms'
import TextTerms from '../componentsTerms/TextTerms'
import StepPolicy from '../componentsPolicy/StepPolicy'
import Footer from '../componentsHome/Footer'
import ScrollTop from '../componentsHome/ScrollTop'

const Terms = () => {
  return (
    <div>
        <NavBarPolicy/>
        <SliderTerms/>
        <TextTerms/>
        <ScrollTop/>
        <StepPolicy/>
        <Footer/>
    </div>
  )
}

export default Terms