
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import png1 from "../images2/Infographics-Graphics.jpg";
import png2 from "../images2/Creative-Designs.jpg";
import png3 from "../images2/Visual Identity Design.jpg"
import png4 from "../images2/Photo-Videography.jpg"
import png5 from "../images2/Event Design.jpg"
import png6 from "../images2/Motion Graphics.jpg"
import png7 from "../images2/Ui_ UX Design.jpg"
const Services = () => {
  const [imageSrc, setImageSrc] = useState(png1); 

  const handleMouseEnter = (newImage) => {
    setImageSrc(newImage); 
  };

  const handleMouseLeave = () => {
    setImageSrc(png1); 
  };

  return (
    <div className='mt-5 services'>
      <Container>
        <Row>
          <Col lg="6" md="12" className='mt-5' data-aos="fade-right" data-aos-duration="2000">
            <h4>Services</h4>
            <img style={{ borderRadius: "20px", width: "85%" }} className='mt-3' src={imageSrc} alt='' />
          </Col>
          <Col lg="6" md="12" className='mt-5' data-aos="fade-left" data-aos-duration="2000">
            <h1 
              onMouseEnter={() => handleMouseEnter(png1)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Infographics Graphics
            </h1>
            <h1 
              onMouseEnter={() => handleMouseEnter(png2)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Creative Designs
            </h1>
            <h1 
              onMouseEnter={() => handleMouseEnter(png3)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Event Design
            </h1>
            <h1 
              onMouseEnter={() => handleMouseEnter(png4)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Visual Identity Design
            </h1>
            <h1 
              onMouseEnter={() => handleMouseEnter(png5)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Photo/Videography
            </h1>
            <h1 
              onMouseEnter={() => handleMouseEnter(png6)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Motion Graphics
            </h1>
            <h1 
              onMouseEnter={() => handleMouseEnter(png7)}
              onMouseLeave={handleMouseLeave}
              className='hover'
            >
              Ui/Ux Design
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
