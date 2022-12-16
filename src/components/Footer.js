import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/Drashean_logo.png";
import navIcon1 from "../assets/img/github-1.svg";
import navIcon2 from "../assets/img/facebook-4.svg";
import navIcon3 from "../assets/img/linkedin-3.svg";
import React from 'react'
// import { useState } from 'react'



export const Footer = () => {

  // const [showUp, setShowUp] = useState(false)

  
  // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //   setShowUp(true)
  // } else {
  //   setShowUp(false)
  // }
  


  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a
                href="https://github.com/Dragonshean"
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
              >
                <img src={navIcon1} alt="github" />
              </a>
              <a
                href="https://www.facebook.com/wilsonshean/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-icon"
              >
                <img src={navIcon2} alt="facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/wilson-shean"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <img src={navIcon3} alt="linkedin" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Created by Wilson Shean.</p>
            <button className="toTheTop" onClick={topFunction}>To the top</button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
