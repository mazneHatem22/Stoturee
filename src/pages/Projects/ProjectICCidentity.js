import React from 'react'
import SliderICCidentity from '../../ICCidentity/SliderICCidentity'
import PhotosICCidentity from '../../ICCidentity/PhotosICCidentity'
import Us from '../../componentsHome/Us'
import { data3 } from '../../data'

const ProjectICCidentity = () => {
  return (
    <>
        <SliderICCidentity/>
        <PhotosICCidentity data3={data3}/>
        <Us/>
    </>
  )
}

export default ProjectICCidentity