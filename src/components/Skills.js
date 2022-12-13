import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/coding.jpeg";
import skill2 from "../assets/img/Language.jpg";
import skill3 from "../assets/img/graphic-design-tools.jpeg";
import skill4 from "../assets/img/About me.jpg";
import colorSharp from "../assets/img/color-sharp.png";
import React from 'react'

export const Skills = () => {
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="img" />
                  <h5>Web Development</h5>
                  <div className="skillInfo">
                    <ul>
                      <li><h6>Java, JavaScript, Typescript</h6></li>
                      <li><h6>PostCSS, SCSS</h6></li>
                      <li><h6>Next.js, Three.js</h6></li>
                      <li><h6>React, React Native</h6></li>
                      <li><h6>Node.js, MySQL</h6></li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <img src={skill2} alt="img" />
                  <h5>Language</h5>
                  <div className="skillInfo">
                    <ul>
                      <li><h6>English-Fluent</h6></li>
                      <li><h6>Japanese-Beginner</h6></li>
                      <li><h6>German-Beginner</h6></li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <img src={skill3} alt="img" />
                  <h5>Development Tools</h5>
                  <div className="skillInfo">
                    <ul>
                      <li><h6>Adobe Premiere CC</h6></li>
                      <li><h6>Adobe Illustrator CS6</h6></li>
                      <li><h6>PhotoShop</h6></li>
                      <li><h6>PowerDirector</h6></li>
                      <li><h6>Figma, SVGator</h6></li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <img src={skill4} alt="img" />
                  <h5>Sales Skills</h5>
                  <div className="skillInfo">
                    <ul>
                      <li><h6>Rapport Building</h6></li>
                      <li><h6>Upselling and cross-selling</h6></li>
                      <li><h6>Online Marketing</h6></li>
                      <li><h6>Objection Handling</h6></li>
                      <li><h6>Exhibition Organizing</h6></li>
                    </ul>
                  </div>
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
