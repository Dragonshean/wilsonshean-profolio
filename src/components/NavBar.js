import React from 'react'
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/Drashean_logo.png";
import navIcon1 from "../assets/img/github-1.svg";
import navIcon2 from "../assets/img/facebook-4.svg";
import navIcon3 from "../assets/img/linkedin-3.svg";

export const NavBar = ({ loadingPage }) => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    //捲動side effect

    const onScroll = () => {
      if (window.scrollY > 50 ) {
        setScrolled(51);
      }else {
        setScrolled(0);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate()



  return (
    <Navbar expand="lg" className={scrolled > 50 ? "scrolled" : ""} id="home">
      <Container>
        <Link className="Navbar-logo" to="/" onClick={loadingPage}>
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/home"
              className="navbar-link"
              onClick={loadingPage}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="navbar-link"
              onClick={loadingPage}
            >
              About
            </Link>
            <Link
              to="/achievement"
              className= "navbar-link"
              onClick={loadingPage}
            >
              Achieve
            </Link>
          </Nav>
          <span className="navbar-text">
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
            <HashLink to='/home#contact'>
                <button className="vvd"><span>Let's Contact</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
