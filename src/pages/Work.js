import React from 'react'
import SliderWork from '../componentsWork/SliderWork'
import OurGroup from '../componentsWork/OurGroup'
import Us from "../componentsHome/Us";
import Footer from "../componentsHome/Footer";
import ScrollTop from '../componentsHome/ScrollTop';
import Feartured from '../componentsContact/Feartured';

const Work = () => {
  return (
    <div>
      <SliderWork/>
      <OurGroup/>
      <Feartured/>
      <Us/>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Work