
import SliderNourishme from '../../Nourishme/SliderNourishme'
import PhotosNourishme from '../../Nourishme/PhotosNourishme'
import Us from '../../componentsHome/Us'
import { data1 } from '../../data'

const ProjectNourishme = () => {
  return (
    <>
    <SliderNourishme/>
    <PhotosNourishme data1={data1}/>
    <Us/>
    </>
  )
}

export default ProjectNourishme