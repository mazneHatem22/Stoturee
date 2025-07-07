import React from "react";
import { Button, Container } from "react-bootstrap";
import Slider from "react-slick";
import Slid1 from "../images2/slaid1.png";
import Slid2 from "../images2/slaid2.jpg";
import Slid3 from "../images2/slaid3.png";
import Slid4 from "../images2/slaid4.png";
import Slid5 from "../images2/slaid5.jpg";
import Slid6 from "../images2/slaid6.png";

const Feartured = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    initialSlide: 0,
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
      style={{ backgroundColor: "#07101f", color: "white" }}
      className="mt-5 position-relative feartured-groub"
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <div>
            <h1 className="mt-5">Feartured work</h1>
          </div>
          <div>
            <Button
              style={{ borderRadius: "20px", width: "100px" }}
              className="mt-5 button-view"
              variant="outline-light"
            >
              View All
            </Button>
          </div>
        </div>

        <Slider className="mt-5 slider-fearturead" {...settings}>
          <div >
            <img src={Slid1} alt="" style={{padding: "0 10px" }} />
            <div className="mt-3 mx-5">
              <h3>ICC</h3>
              <p>Brand identity Design</p>
            </div>
          </div>

          <div >
            <img src={Slid2} alt="" style={{padding: "0 10px" }} />
            <div className="mt-3 mx-5">
              <h3>Cemart Film</h3>
              <p>Documentary</p>
            </div>
          </div>

          <div >
            <img src={Slid3} alt="" style={{padding: "0 10px" }} />
          </div>

          <div >
            <img src={Slid4} alt="" style={{padding: "0 10px" }} />
          </div>

          <div >
            <img src={Slid5} alt="" style={{padding: "0 10px" }} />
          </div>

          <div>
            <img src={Slid6} alt="" style={{padding: "0 10px" }} />
            <div className="mt-3 mx-5">
              <h3>Cemart</h3>
              <p>Brand identity Design</p>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};


export default Feartured;
