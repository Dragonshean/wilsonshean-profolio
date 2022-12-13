import { Container, Row, Col, Nav, TabContainer, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.JPG";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.JPG";
import projImg5 from "../assets/img/project5.JPG";
import projImg6 from "../assets/img/project6.JPG";
import React from 'react'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ReactProject-App",
      description: "View Project",
      imgUrl: projImg1,
      link: "https://github.com/Dragonshean/appproject"
    },
    { 
        id: 2, 
        title: "ReactProject-Note", 
        description: "View Project",
        imgUrl: projImg2,
        link: "https://github.com/Dragonshean/ReactProject-Note"
    },
    {
      id: 3,
      title: "TodoList-2022",
      description: "View Project",
      imgUrl: projImg3,
      link: "https://github.com/Dragonshean/TodoList-2022"
    },
    {
      id: 4,
      title: "Reading-List",
      description: "View Project",
      imgUrl: projImg4,
      link: "https://github.com/Dragonshean/ReactProject-Reading-List"
    },
    {
      id: 5,
      title: "Caesar-Steak",
      description: "View Project",
      imgUrl: projImg5,
      link: "https://github.com/Dragonshean/Caesar-Steak"
    },
    {
      id: 6,
      title: "Old-Wilson-Shean-Profolio",
      description: "View Project",
      imgUrl: projImg6,
      link: "https://github.com/Dragonshean/Wilson-Shean-Website"
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My Learning side projects</p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project) => {
                      return ( <ProjectCard key={project.id} {...project} />)
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Will Update In The Future!!
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Will Update In The Future!!
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img" />
    </section>
  );
};
