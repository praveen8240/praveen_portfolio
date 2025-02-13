import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/praveen.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid style={{ padding: "20px" }} className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{
              maxWidth: "250px",
              margin: "10px auto",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#337ab7",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
        <p style={{color:"white"}}>For Complete resume view , please download it :)</p>
          <iframe
            src={pdf}
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              width: "75%",
              height: "75vh",
              border: "2px solid #ddd",
              overflow: "auto"
            }}
            title="Resume Preview"
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{
              maxWidth: "250px",
              margin: "10px auto",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#337ab7",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;


