import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Exhibit2023 } from "../AchievePlate/exhibit2023";
import exhibit2023Img from "./img/intex2023-1.jpg";

export const Banner6 = () => {
  return (
    <section
      className="banner"
      id="home"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-offset="0"
      data-aos-delay="50"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <p className="backWords">{"<p>"}</p>
            <Exhibit2023 />
            <p className="backWords">{"</p>"}</p>
            <br />
            <p className="backWords">{"<p>"}</p>
            <p className="bannerInfo">
              3 days for exhibition, 5 days for clients visit
            </p>
            <p className="backWords">{"</p>"}</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <p className="backWords">{"<img/>"}</p>
            <img src={exhibit2023Img} alt="img" />
            <a
              href="https://intexsouthasia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-a"
            >
              Explore Exhibition Website
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
