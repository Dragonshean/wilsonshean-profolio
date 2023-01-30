import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chart1 from "./img/Main page Data Analysis/Benefits-YoY.png";
import chart2 from "./img/Main page Data Analysis/KPI Card.png";
import chart3 from "./img/Main page Data Analysis/Product Item sales.png";
import chart4 from "./img/Main page Data Analysis/Region Sales - Item.png";
import chart5 from "./img/Main page Data Analysis/Region Sales - Year Growth.png";
import chart6 from "./img/Main page Data Analysis/YOY-Sales Growth.png";
import colorSharp from "./img/color-sharp.png";
import React from 'react'


export const SalesCharts = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Sales Achievements</h2>
              <p>Press it to see</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="sales-slider"
              >
                <div className="item">
                  <a href="https://drive.google.com/file/d/1SzZsU1bRuKWo-wGeoRw4a8HgKnZI6L3G/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img src={chart1} alt="img" />
                  </a>
                  <h5>Benefits-YoY</h5>
                </div>
                <div className="item">
                  <a href="https://drive.google.com/file/d/1IQvGx3SXQX-vzg1GMx3pvF0GBQ8Ty_AL/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img src={chart2} alt="img" />
                  </a>
                  <h5>KPI Card</h5>
                </div>
                <div className="item">
                  <a href="https://drive.google.com/file/d/1yifZm_CAaoPzspOIyhxXPxp70yJkeT6V/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                  >  
                    <img src={chart3} alt="img" />
                  </a>
                  <h5>Product Item sales</h5>
                </div>
                <div className="item">
                  <a href="https://drive.google.com/file/d/1wXr2mbQQVSdLu2Z9GEp3HTXzGMUaaUR1/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img src={chart4} alt="img" />
                  </a>
                  <h5>Region Sales - Item</h5>
                </div>
                <div className="item">
                  <a href="https://drive.google.com/file/d/1Nf-cBDzTCKkVyw__EW3YaZVJqwIeXAcZ/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img src={chart5} alt="img" />
                  </a>
                  <h5>Region Sales - Year Growth</h5>
                </div>
                <div className="item">
                  <a href="https://drive.google.com/file/d/17XudMDOQVtq8M8RykLF-QiTguyb_hEVP/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <img src={chart6} alt="img" />
                  </a>
                  <h5>YOY-Sales Growth</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="img" />
    </section>
  );
};
