import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import max from "../../Assets/Projects/max.webp";
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
  title="Code Executor"
  ghLink="https://github.com/praveen8240/Compiler-Sandboxed"
  description="A scalable online code execution platform that allows users to write, compile, and run code in a secure, sandboxed environment. It features a real-time code editor with syntax highlighting, error handling, and efficient queuing for execution requests. Built with React, Node.js, Express, and Docker, ensuring safe and isolated execution for multiple users simultaneously."
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
