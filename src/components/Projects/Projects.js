import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/stock.jpg";
import chatapp from "../../Assets/Projects/chatapp.jpg";
import shopping from "../../Assets/Projects/shopping.webp";
import aptiprep from "../../Assets/Projects/aptiprep.webp"
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
              imgPath={chatapp}
              isBlog={false}
              title="GUPSHUP - Your Chat App"
              description="A full-stack real-time chat application built using the MERN stack with Socket.IO for instant bi-directional communication. Features include user authentication, Redux Toolkit state management, real-time messaging, typing indicators, infinite scroll with pagination, message grouping by date, and responsive design for mobile and desktop."
              ghLink="https://github.com/chitrankusarkar/GUPSHUP"
              demoLink="https://gupshup-inky.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Market Forecasting"
              description="This project employs a Long Short-Term Memory (LSTM) neural network combined with heuristic techniques to predict stock prices for Tesla (TSLA) over a 2-year period based on historical data. The approach integrates AI and time-series decomposition to achieve a 76% prediction accuracy."
              ghLink="https://github.com/chitrankusarkar/Time-Series-Analysis-of-TESLA-Stock"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aptiprep}
              isBlog={false}
              title="Aptitude Prep"
              description="A frontend-only aptitude preparation website built with React.js, featuring a clean and structured layout with clickable topic-wise links for quantitative, logical, and verbal reasoning practice. Designed with a responsive and user-friendly interface to help users easily navigate aptitude topics."
              ghLink="https://github.com/chitrankusarkar/Apti-Prep"
              demoLink="https://campusaptiprep.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping App Management System"
              description="A Shopping Application Management System designed to provide a seamless shopping experience for users and robust administrative tools for system management.Built using simple Java Swing as the fronted and used MySQL as Database.
              Here admins can manage add products to the database and manage users. Whereas users can login and buy products and keep a track of their purchase. 
              Updation is coming soon!"
              ghLink="https://github.com/chitrankusarkar/Shopping-Application-Management-System"
            />
          </Col>
        </Row>
        <h2 style={{ color: 'white' }}>Will Start Doing Soon!!</h2>

      </Container>
    </Container>
  );
}

export default Projects;
