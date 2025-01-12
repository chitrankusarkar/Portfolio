import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chitranku Sarkar </span>
            from <span className="purple"> West Bengal, India. </span>
            Currently pursuing MCA from Jadavpur University. I have completed BSc in Computer Science from WBSU, Kolkata.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hangout with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Smoking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do it when it's about ego!"{" "}
          </p>
          <footer className="blockquote-footer">Chitranku</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
