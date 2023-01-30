import { Container, Row, Col } from "react-bootstrap";
import React from 'react'
import { Sales } from '../AboutPlate/sales'
import hauming from './img/浩名商標-2022.jpg'






export const Banner2 = () => {
  

  return (
    <section className="banner" id="home" data-aos="flip-left"
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
            <Sales/>
            <p className="backWords">{"</p>"}</p>
            <br />
            <p className="backWords">{"<p>"}</p>
            <p className="bannerInfo">
              Oversea Sales Manager - In charge all operations of textile related products
            </p>
            <p className="backWords">{"</p>"}</p>
          </Col>
          <Col xs={12} md={6} xl={5} >
            <br/>
            <p className="backWords">{"<img/>"}</p>
            <img src={hauming} alt="img"/>
            <a 
              href="https://www.hauming.com.tw/" 
              target="_blank"
              rel="noopener noreferrer"
              className="about-a"
            >
                Explore Company Website
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
