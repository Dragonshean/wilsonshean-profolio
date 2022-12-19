import { Container, Row, Col, Nav, TabContainer, Tab } from "react-bootstrap";
import { SideAchieveCard } from "./SideAchieveCard";
import { achieve2018 } from "../../Exhibition/2018"
import { achieve2019 } from "../../Exhibition/2019"
import { achieve2021_2022 } from "../../Exhibition/2021&2022"
import colorSharp2 from "./img/color-sharp2.png";
import React from 'react'

export const SideAchieve = () => {
  


  return (
    <section className="project" id="projects" data-aos="flip-up"
      data-aos-offset="100"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row>
          <Col>
            <h2>Textile Exhibitions</h2>
            <p>Exhibition I attended and arranged</p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">2018</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2019</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">2021 & 2022</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {achieve2018.map((project) => {
                      return ( <SideAchieveCard key={project.id} {...project} />)
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    {achieve2019.map((project) => {
                      return ( <SideAchieveCard key={project.id} {...project} />)
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {achieve2021_2022.map((project) => {
                      return ( <SideAchieveCard key={project.id} {...project} />)
                    })}
                  </Row>
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
