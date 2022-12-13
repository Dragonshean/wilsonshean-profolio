import React from 'react'
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/Drashean_logo.png";
import navIcon1 from "../assets/img/github-1.svg";
import navIcon2 from "../assets/img/facebook-4.svg";
import navIcon3 from "../assets/img/linkedin-3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //捲動side effect
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
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
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Contact</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
