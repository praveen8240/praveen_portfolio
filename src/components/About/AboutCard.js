import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mathi Praveen </span>
            from <span className="purple"> Kondapalli, India.</span>
            <br />
            I am currently student in Lakireddy Bali reddy college of engineering.
            <br />
            I am a Computer science student.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Stock Markets
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Try,try,try..... until you feels it's enough"{" "}
          </p>
          <footer className="blockquote-footer">Praveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
