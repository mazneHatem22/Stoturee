import React from 'react'
import SliderCemartidentity from '../../Cemartidentity/SliderCemartidentity'
import PhotosCemartidentity from '../../Cemartidentity/PhotosCemartidentity'
import Us from '../../componentsHome/Us'
import { data2 } from '../../data'

const ProjectCemartidentity = () => {
  return (
    <>
    <SliderCemartidentity/>
    <PhotosCemartidentity data2={data2}/>
    <Us/>
    </>
  )
}

export default ProjectCemartidentity