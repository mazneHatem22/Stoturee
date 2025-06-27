import React from 'react'
import NavBarWork from '../componentsWork/NavBarWork'
import SliderCemart from '../componentsCemart/SliderCemart'
import ProjectCermart from '../componentsCemart/ProjectCermart'
import PhotoCemart from '../componentsCemart/PhotoCemart'
import FooterCemart from '../componentsCemart/FooterCemart'
import ScrollTop from '../componentsHome/ScrollTop'

const CemartGroup = () => {
  return (
    <div>
        <NavBarWork/>
        <SliderCemart/>
        <ProjectCermart/>
        <PhotoCemart/>
        <FooterCemart/>
        <ScrollTop/>
    </div>
  )
}

export default CemartGroup