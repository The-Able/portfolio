import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillSkype,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  <span className="yellow"> SUMMARY </span>
                </h1>
                <p className="home-about-body">
                  Experienced web and mobile Full-Stack Developer with 7+ years of experience building projects from the ground
                  up, including design, development, and deployment. Skilled at finding the processes and tools for a project that
                  will deliver an excellent product to end-user while being frugal with time.
                  <br />
                  <br />
                  My professional skills are:
                  <br />
                  - Frontend: HTML, CSS, Javascript, Bootstrap, Sass, React/Redux, Typescript, Vue, Angular
                  <br />
                  - Backend: Nodejs, Python, C#, Golang, PHP, Java
                  <br />
                  - Database: MongoDB, MySQL, PostgreSQL, Firebase
                  <br />
                  - Devops: Jenkins, Docker, Kubernetes, GCP, Git, Azure
                  <br />
                  <br />
                  Individually, we are weak branches, but together we form an unbreakable tree. Let’s make a better world!
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/The-Able"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/oleksandroharkov/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://join.skype.com/invite/HBfEVCghNxt8"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="skype"
                    >
                      <AiFillSkype />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="whatsapp"
                    >
                      <AiOutlineWhatsApp />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About