import React from 'react'
import SliderTerms from '../componentsTerms/SliderTerms'
import TextTerms from '../componentsTerms/TextTerms'
import StepPolicy from '../componentsPolicy/StepPolicy'
import Footer from '../componentsHome/Footer'
import ScrollTop from '../componentsHome/ScrollTop'

const Terms = () => {
  return (
    <div>

        <SliderTerms/>
        <TextTerms/>
        <ScrollTop/>
        <StepPolicy/>
        <Footer/>
    </div>
  )
}

export default Terms