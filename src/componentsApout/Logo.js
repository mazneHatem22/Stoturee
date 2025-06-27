import Slider from "react-slick";
import asset1 from "../images2/Asset 11.svg";
import asset2 from "../images2/Asset 12.svg";
import asset3 from "../images2/Asset 13.svg";
import asset4 from "../images2/Asset 14.svg";
import asset5 from "../images2/Asset 15.svg";
import asset6 from "../images2/Asset 16.svg";
import asset7 from "../images2/Asset 17.svg";

import { Col, Container, Row } from "react-bootstrap";

export default function Logo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="mt-5">
      <Container>
        <Row className="m-0">
        <Col sm="12">
          <div className="mt-3">
            <h2 style={{ fontWeight: "bold" }}>Our Clints</h2>
          </div>

          <Slider className="mt-5" {...settings}>
            
              <div>
                <img className="as4 " src={asset4} alt="" />
              </div>
           
            
              <div>
                <img className="as6 mt-2" src={asset6} alt="" />
              </div>
            
              <div>
                <img className="vv " src={asset5} alt="" />
              </div>
            
              <div>
                <img className="as7 mt-3" src={asset7} alt="" />
              </div>
           
              <div>
                <img className="vv as2 mt-3" src={asset2} alt="" />
              </div>
            
           
              <div>
                <img className="as1" src={asset1} alt="" />
              </div>
            
              <div>
                <img className="vv" src={asset3} alt="" />
              </div>
           
          </Slider>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
