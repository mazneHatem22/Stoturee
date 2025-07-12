import React from 'react'
import SliderCemart from '../componentsCemart/SliderCemart'
import ProjectCermart from '../componentsCemart/ProjectCermart'
import PhotoCemart from '../componentsCemart/PhotoCemart'
import FooterCemart from '../componentsCemart/FooterCemart'
import ScrollTop from '../componentsHome/ScrollTop'

const CemartGroup = () => {
  return (
    <div>
        <SliderCemart/>
        <ProjectCermart/>
        <PhotoCemart/>
        <FooterCemart/>
        <ScrollTop/>
    </div>
  )
}

export default CemartGroup