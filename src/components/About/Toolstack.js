import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { SiSplunk } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { SiMetasploit } from "react-icons/si";
import './Techstack.css';
import { SiWireshark } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMetasploit />
        <p>Metasploit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <p>Kali Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaEye />
        <p>Nmap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
        <p>Wireshark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
        <p>Splunk</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
