import React from 'react'
import SliderCemart from '../componentsCemart/SliderCemart'
import ProjectCermart from '../componentsCemart/ProjectCermart'
import PhotoCemart from '../componentsCemart/PhotoCemart'
import FooterCemart from '../componentsCemart/FooterCemart'

const CemartGroup = () => {
  return (
    <div>
        <SliderCemart/>
        <ProjectCermart/>
        <PhotoCemart/>
        <FooterCemart/>
    </div>
  )
}

export default CemartGroup