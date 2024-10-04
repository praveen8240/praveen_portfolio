import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LeanTeach from '../Assets/leantech.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "LeanTech Labs",
      period: "July (2024) - Present",
      image: LeanTeach,
      description: "Involved in Web-Apps, websites development and also cyber analytics"
    }
  ];

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-center w-100">
        <Col xs={12} className="text-center mb-4">
          <h2 className="text-success">EXPERIENCE</h2>
        </Col>

        {experiences.map((exp, index) => (
          <Col xs={12} md={10} lg={8} key={index} className="mb-4">
            <Card className="h-100 shadow-sm mx-auto p-4" style={{ maxWidth: '900px' }}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={12} md={8} className="text-start">
                    <h4 className="text-success">{exp.period}</h4>
                    <h3 className="mb-3">{exp.title}</h3>
                    <h4 className="text-muted mb-3">{exp.company}</h4>
                    <p>{exp.description}</p>
                  </Col>
                  <Col xs={12} md={4} className="d-flex justify-content-center mt-3 mt-md-0">
                    <img 
                      src={exp.image} 
                      alt={exp.company} 
                      style={{ width: '100%', maxWidth: '200px', height: 'auto' }} 
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
