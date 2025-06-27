import React from 'react'
import NavBarWork from '../componentsWork/NavBarWork'
import SliderWork from '../componentsWork/SliderWork'
import OurGroup from '../componentsWork/OurGroup'
import Us from "../componentsHome/Us";
import Footer from "../componentsHome/Footer";
import ScrollTop from '../componentsHome/ScrollTop';

const Work = () => {
  return (
    <div>
      <NavBarWork/>
      <SliderWork/>
      <OurGroup/>
      <Us/>
      <Footer/>
      <ScrollTop/>

    </div>
  )
}

export default Work