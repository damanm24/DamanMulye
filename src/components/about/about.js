import React from "react";
import TextLoop from "react-text-loop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faMediumM,
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./about.css";
import pdf from "./DamansResume.pdf";
import background from "./background.JPG";

export const About = () => {
  var aboutStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: 'relative',
    overflow: 'hidden'
  };
  return (
    <div>
      <div className="section about" style={aboutStyle}>
        <div className="navbar">
          <div className="navbar-elements">
            <ul className="nav-list">
              <li className="nav-items">
                <a href="#about">
                  <span className="highlight-color">00.</span> About
                </a>
              </li>
              <li className="nav-items">
                <a href="#experience">
                  <span className="highlight-color">01.</span> Experience
                </a>
              </li>
              <li className="nav-items">
                <a href="#projects">
                  <span className="highlight-color">02.</span> Projects
                </a>
              </li>
              <li className="nav-items">
                <a href={pdf}>
                  <span className="highlight-color">03.</span> Contact
                </a>
              </li>
              <li className="nav-items">
                <a href={pdf}>
                  <span className="highlight-color">04.</span> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="greeting">
          <p className="headline">Hello, my name is</p>
          <h1 className="name top">Daman Mulye.</h1>
          <h1 className="name bottom">
            I am{" "}
            <TextLoop>
              <span>
                <strong>a student.</strong>
              </span>
              <span>
                <strong>an engineer.</strong>
              </span>
              <span>
                <strong>a developer.</strong>
              </span>
            </TextLoop>
          </h1>
          <div className="limit">
            <p className="tagline">
              I'm a computer science student at the University of Illinois at
              Urbana-Champaign specialzing in web technologies and data science.
            </p>
          </div>
        </div>

        <div className="social-bar">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/daman-m-4a2414130/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
            </a>
            <br />
            <a
              href="https://github.com/damanm24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <br />
            <a
              href="https://medium.com/@damanmulye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMediumM} size="2x" className="icon" />
            </a>
            <br />
            <a
              href="https://www.facebook.com/damanm24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
            </a>
            <br />
            <a
              href="https://www.instagram.com/24.dm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
