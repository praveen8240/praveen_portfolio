import { Container, Row, Col, Card } from 'react-bootstrap';
import LeanTech from '../Assets/leantech.png';
import Skelo from '../Assets/skelo.gif';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Skelo",
      period: "August (2024) - Present",
      image: Skelo,
      description: "Involved in Web-Apps, website development"
    },
    {
      title: "Cyber Security Analyst",
      company: "LeanTech Labs",
      period: "July (2024) - Present",
      image: LeanTech,
      description: "Vulnerability assessments and Penetration testing"
    }
  ];

  return (
    <Container fluid className="experience-container py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-5">
            <h2 className="section-title">My <span className="text-accent">Experience</span></h2>
<p className="section-subtitle">Professional roles I've held recently.</p>
          </Col>

          {experiences.map((exp, index) => (
            <Col xs={12} key={index} className="mb-4">
              <Card className="experience-card border-0 shadow">
                <Card.Body className="p-0">
                  <Row className="g-0">
                    <Col xs={12} md={8} className="p-4">
                      <h4 className="period-text">{exp.period}</h4>
                      <h3 className="job-title">{exp.title}</h3>
                      <h4 className="company-name">{exp.company}</h4>
                      <p className="job-description">{exp.description}</p>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                      <img 
                        src={exp.image} 
                        alt={exp.company} 
                        className="company-logo" 
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}