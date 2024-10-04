import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import max from "../../Assets/Projects/max.png";
import chatify from "../../Assets/Projects/chatify.png";
import port from "../../Assets/Projects/port.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Sample Portfolio"
              description="This landing page is a stunning example of modern web development, built using React, Framer Motion, and Tailwind CSS. The page features a sleek and responsive design, with a unique loading animation that sets the tone for a seamless user experience."
              ghLink="https://github.com/praveen8240/sample_portfolio"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={max}
              isBlog={false}
              title="Max Real Estate"
              description="Realworld real estate website where we will be able to sell/buy/rent lands and houses.It is a front End project where i developed same front end using reactJs and also using simple javascript.It is also responsive"
              ghLink=""

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Landing Page"
              description="This landing page is a stunning example of modern web design, built using React, Framer Motion, and Tailwind CSS. The page features a sleek and responsive design, with a unique curved menu that adds a touch of elegance to the user experience."
              ghLink="https://github.com/praveen8240/Landing-Page"
              demoLink="https://praveen8240.github.io/Landing-Page/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
