import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import jpg2 from "../images2/png1.png";
import jpg3 from "../images2/png2.png";
import jpg4 from "../images2/png3.png";
import jpg5 from "../images2/png4.png";
import jpg6 from "../images2/png5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OurWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // علشان كل مرة العنصر يدخل الشاشة يعمل الحركة
    });

    // 👇 ده اللي هيفرق معاك و يخلي العناصر تتعرف بعد التنقل أو ظهورها
    setTimeout(() => {
      AOS.refresh();
    }, 200); // نص ثانية كفاية بعد تحميل الصفحة
  }, []);

  return (
    <Container>
      <Row>
        <div
          className="d-flex justify-content-between align-items-center mt-5 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <h3>Our Work</h3>
          </div>
          <div>
            <Button
              style={{ fontSize: "15px" }}
              className="click2 mt-4"
              variant="outline-dark"
            >
              View All
            </Button>{" "}
          </div>
        </div>
        <Col
          lg="4"
          md="4"
          sm="12"
          className="mt-4"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            style={{ borderRadius: "20px" }}
            className="w-100 "
            src={jpg2}
            alt=""
          />
          <img
            style={{ borderRadius: "20px" }}
            className="w-100 mt-3"
            src={jpg3}
            alt=""
          />
        </Col>
        <Col
          lg="4"
          md="4"
          sm="12"
          className="mt-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            style={{ borderRadius: "20px" }}
            className="w-100 h-100"
            src={jpg4}
            alt=""
          />
        </Col>
        <Col
          lg="4"
          md="4"
          sm="12"
          className="mt-4"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            style={{ borderRadius: "20px" }}
            className="w-100 "
            src={jpg5}
            alt=""
          />
          <img
            style={{ borderRadius: "20px" }}
            className="w-100  mt-3"
            src={jpg6}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OurWork;
