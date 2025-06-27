import React from "react";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import stoture from "../images2/Asset 7.svg";
import toggle from "../images2/Asset 4.svg";
import chat from "../images2/Asset 3.svg";

const NavBarContact = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <Link to={"/"}>
              <Navbar.Brand href="#">
                <img className="w-50" src={stoture} alt="" />
              </Navbar.Brand>
            </Link>
            <div className="d-flex h-nav">
              <div>
                <img className="chat" src={chat} alt="" />
              </div>

              <div>
                <h4 className="mx-3">Lets Talk </h4>
              </div>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <img className="toggle" src={toggle} alt="" />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <div className="text-end mx-5 toggle-text">
                  <div>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      <h1 className="text-color2">Homepage</h1>
                    </Link>
                    <Link to={"/about"} style={{ textDecoration: "none" }}>
                      <h1 style={{ cursor: "pointer" }} className="text-color2">
                        About us
                      </h1>
                    </Link>

                    <Link to={"/work"} style={{ textDecoration: "none" }}>
                      <h1 className="text-color2">work</h1>
                    </Link>

                    <h1 className="">Contact us</h1>
                  </div>
                  <div className="mt-5">
                    <p className="get">Get in touch</p>
                    <h3 className="text-color">+97150 936 9323</h3>
                    <h4 className="text-color">
                      {" "}
                      <a
                        className="text-color"
                        href="mailto:stoture.media@gmail.com"
                      >
                        Stoture.media@gmail.com
                      </a>
                    </h4>
                    <div className="mt-5">
                      <FaLinkedinIn
                        size={"25px"}
                        style={{ color: "#808080" }}
                        className="mx-3  "
                      />
                      <FaInstagram
                        size={"25px"}
                        style={{ color: "#808080" }}
                        className="mx-3 "
                      />
                      <FaBehance
                        size={"25px"}
                        style={{ color: "#808080" }}
                        className="mx-3 "
                      />
                      <FaFacebookF
                        size={"25px"}
                        style={{ color: "#808080" }}
                        className="mx-3"
                      />
                    </div>
                    <Button className="click2 mt-4" variant="outline-dark">
                      Lets Talk
                    </Button>{" "}
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBarContact;
