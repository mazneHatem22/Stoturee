import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import stoture from "../images2/Asset 6.svg";
import toggle from "../images2/Asset 4.svg";
import chat from "../images2/Asset 3.svg";
import { useState, useEffect } from "react";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    setShowOffcanvas(false);
  }, [location]);

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <div className="d-flex justify-content-between align-items-center w-100">
              <Navbar.Brand href="#">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <img className="w-50" src={stoture} alt="" />
                </Link>
              </Navbar.Brand>
              <div className="d-flex align-items-center gap-4">
                <div
                  style={{ marginTop: "10px" }}
                  className="text-center gap-2 d-flex"
                >
                  <div>
                    <img
                      style={{ width: "40px" }}
                      className="chat"
                      src={chat}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="mb-0 text-font">Lets Talk </p>
                  </div>
                </div>
                <Navbar.Toggle
                  aria-controls="offcanvasNavbar"
                  onClick={() => setShowOffcanvas(true)}
                >
                  <img className="toggle" src={toggle} alt="" />
                </Navbar.Toggle>
              </div>
            </div>

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <div className="text-end  mx-5">
                  <div>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      <h1
                        className={
                          currentPath === "/"
                            ? "text-color active-link"
                            : "text-color"
                        }
                      >
                        Homepage
                      </h1>
                    </Link>
                    <Link to={"/about"} style={{ textDecoration: "none" }}>
                      <h1
                        className={
                          currentPath === "/about"
                            ? "text-color active-link"
                            : "text-color"
                        }
                      >
                        About us
                      </h1>
                    </Link>
                    <Link to={"/work"} style={{ textDecoration: "none" }}>
                      <h1
                        className={
                          currentPath === "/work"
                            ? "text-color active-link"
                            : "text-color"
                        }
                      >
                        work
                      </h1>
                    </Link>
                    <Link to={"/contact"} style={{ textDecoration: "none" }}>
                      <h1
                        className={
                          currentPath === "/contact"
                            ? "text-color active-link"
                            : "text-color"
                        }
                      >
                        Contact us
                      </h1>
                    </Link>
                  </div>
                  <div className="mt-5">
                    <p>Get in touch</p>
                    <h4 className="text-color">+97150 936 9323</h4>
                    <h5 className="text-color">
                      {" "}
                      <a
                        className="text-color"
                        href="mailto:stoture.media@gmail.com"
                      >
                        Stoture.media@gmail.com
                      </a>
                    </h5>
                    <div className="mt-3">
                      <FaLinkedinIn
                        size={"20px"}
                        style={{ color: "#808080" }}
                        className="mx-3"
                      />
                      <FaInstagram
                        size={"20px"}
                        style={{ color: "#808080" }}
                        className="mx-3 "
                      />
                      <FaBehance
                        size={"20px"}
                        style={{ color: "#808080" }}
                        className="mx-3 "
                      />
                      <FaFacebookF
                        size={"20px"}
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
}

export default NavBar;
