import React from "react";
// import { Button, Container } from "react-bootstrap";
// import Slider from "react-slick";
import Slid1 from "../images2/slaid1.png";
import Slid2 from "../images2/slaid2.png";
import Slid3 from "../images2/slaid3.png";
import Slid4 from "../images2/slaid4.png";
import Slid5 from "../images2/slaid5.png";
import Slid6 from "../images2/slaid6.png";

import  { useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import Slider from 'react-slick';

import arrowLeft from '../images2/Arrow ---01.png';
import arrowRight from '../images2/Arrow right-01.png';



const Feartured = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#07101f", color: "white" , padding: "15px"}}
      className="mt-5 position-relative feartured-groub "
    >
      <Container>
        <div className="row mt-5">
          <div className="col-lg-9 col-md-6 col-12">
            <h1 className="mt-2">Feartured work</h1>

          </div>
          <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex align-items-center gap-3 mt-2">
            <Button
              style={{ borderRadius: "20px", width: "100px", backgroundColor:"#1e2734" }}
              variant="outline-light"
            >
              View All
            </Button>

           
            <div className="d-flex gap-2 align-items-center">
              <img
                src={arrowLeft}
                alt="Previous"
                style={{
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderRadius: '50%',
                }}
                onClick={() => sliderRef.current.slickPrev()}
              />
              <img
                src={arrowRight}
                alt="Next"
                style={{
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                   border: '1px solid',
                  borderRadius: '50%',
                }}
                onClick={() => sliderRef.current.slickNext()}
              />
            </div>
          </div>

          </div>
          

        
        </div>

        <Slider ref={sliderRef} className="mt-3 slider-fearturead" {...settings}>
          <div>
            <img src={Slid1} alt="" style={{ padding: "0 10px" }} />
            <div className="mt-3" style={{ padding: "0 10px" }}>
              <h4 className="mb-0">Cemart</h4>
              <p style={{ fontSize: "13px" }}>Brand Identity Design</p>
            </div>
          </div>

          <div>
            <img src={Slid2} alt="" style={{ padding: "0 10px" }} />
            <div className="mt-3" style={{ padding: "0 10px" }}>
              <h4 className="mb-0">ICC</h4>
              <p style={{ fontSize: "13px" }}>Brand Identity Design</p>
            </div>
          </div>

          <div>
            <img src={Slid3} alt="" style={{ padding: "0 10px" }} />
            <div className="mt-3" style={{ padding: "0 10px" }}>
              <div className="mt-3">
                <h4 className="mb-0">Cemart Film</h4>
                <p style={{ fontSize: "13px" }}>Documentary</p>
              </div>
            </div>
          </div>

          <div>
            <img src={Slid4} alt="" style={{ padding: "0 10px" }} />
            <div className="mt-3" style={{ padding: "0 10px" }}>
              <h4 className="mb-0">The Most 5000 - Book</h4>
              <p style={{ fontSize: "13px" }}>Book Design</p>
            </div>
          </div>

          <div>
            <img src={Slid5} alt="" style={{ padding: "0 10px" }} />
            <div className="mt-3" style={{ padding: "0 10px" }}>
              <h4 className="mb-0">Nourish me.HEPN</h4>
              <p style={{ fontSize: "13px" }}>Brand Identity Design</p>
            </div>
          </div>

          <div>
            <img src={Slid6} alt="" style={{ padding: "0 10px" }} />
            <div className="mt-3" style={{ padding: "0 10px" }}>
              <h4 className="mb-0">PIL</h4>
              <p style={{ fontSize: "13px" }}>Social Media Designs</p>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};





export default Feartured;
