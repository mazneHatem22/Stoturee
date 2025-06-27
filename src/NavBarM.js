import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const NavBarM = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // تغيير الحالة عند الضغط
  };

  return (
    <div className="position-relative">
      <header>
        <a href="#" className="logo">
          Logo
        </a>
        <nav className="n">
          <button onClick={handleClick}>Click</button>
        </nav>
      </header>
      <div className={`xx ${isActive ? "yy" : ""}`}>
        <Container className="mt-4">
          <Row>
            <div>
              <button className="click" onClick={handleClick}>
                X
              </button>
            </div>
            <Col lg="3" md="3" sm="6" xs="6">
              <h5 className="">Company</h5>
              <div className="mt-3">
                <p className="m-0 ">HomePage</p>
                <p className="m-0 ">AboutUS</p>
                <p className="m-0 ">What We Do</p>
                <p className="m-0 ">Work</p>
              </div>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <h5 className="">ContactUs</h5>
              <div className="mt-3">
                <p className="m-0 ">Work With Us</p>
                <p className="m-0 ">Join Our Team</p>
              </div>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <h5 className="">FollowUs</h5>
              <div className="mt-3">
                <p className="m-0 ">Linkedin</p>
                <p className="m-0 ">Facebook</p>
                <p className="m-0 ">Instagram</p>
              </div>
            </Col>
            <Col lg="3" md="3" sm="6" xs="6">
              <div className="cool">
                <div>
                  <div className="mb-2">
                    <span>Cairo, Egypt</span>
                  </div>
                  <h6 className="m-0 ">Seventy, Street Eighty-Two, </h6>
                  <h6 className="m-0 ">Maadi. Cairo, Egypt</h6>
                </div>
                <div>
                  <div className="mb-2">
                    <span>Ras al Khaimah, UAE</span>
                  </div>
                  <h6 className="m-0 ">Business Center RAKEZ, Ras Al </h6>
                  <h6 className="m-0 "> Khaimah, UAE</h6>
                </div>
                <div>
                <div className="mb-2">
                    <span>Get in touch</span>
                  </div>
                  <h6 className="m-0 ">+201012829607 </h6>
                  <h6 className="m-0 ">hello@thebrandcompany.co</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        
      </div>
    </div>
  );
};

export default NavBarM;

//   document.getElementsByClassName("n").addEventListener("click", function() {
//     document.getElementById("xx").classList.toggle("yy");
// });
// <div className="taps position-relative">
//    <Container>
//   <nav>
//     <div className="d-flex justify-content-between  ">
//       <div>
//         <a href="#" className="dd">
//           Moaz
//         </a>
//       </div>
//       <div>
//         <button className="btnn">bbbb</button>
//       </div>
//     </div>
//   </nav>
//   </Container>
//   <div className="bg-black position-absolute w-100 taps2 ">
//     <div>
//         <h1 className="text-center">fff</h1>
//     </div>

//   </div>
// </div>
