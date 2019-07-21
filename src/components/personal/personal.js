import React from "react";
import "./personal.css";
import logo from './daman.jpg';

export const Personal = () => {
  return (
    <div className="section personal">
      <div className="center-item">
        <h1 className="sectionHeading">
          00. <span className="sectionInside">About Me</span>
        </h1>
        <hr />
        <br />
        <div className="about-container">
          <div className="description">
            <p className="text">
              I'm Daman, an aspiring software engineer currently studying
              Computer Science from the University of Illinois at
              Urbana-Champaign (UIUC). I have a strong passion for writing code
              and learning about anything and everything related to technology
              and computers. I hope to specialize in cloud computing and
              artificial intelligence.
            </p>
            <br />
            <p className="text">
              On campus I am an undergraduate research assistant in the
              aerospace engineering department, researching the application of
              Deep Neural Networks to predict airport delays. In my freetime, I
              enjoy writing web applications and developing personal
              applications that I can utilize in my daily life. See some of my
              work below!
            </p>
            <br />
            <p className="text">
              Here is a list of technologies I have experience with:
            </p>
            <ul className="text technology-list">
              <li>
                <span>Java</span>
                <ul>
                  <li>Android App Development</li>
                  <li>Neo4j</li>
                </ul>
              </li>
              <li>
                <span>JavaScript / ES6+ / TypeScript</span>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </li>
              <li>
                <span>C++</span>
                <ul>
                  <li>OpenFrameworks</li>
                  <li>Arduino</li>
                </ul>
              </li>
              <li>
                <span>Python</span>
                <ul>
                  <li>TensorFlow/Keras</li>
                </ul>
              </li>
              <li>HTML5/CSS3</li>
              <li>PostgreSQL/MySQL</li>
            </ul>
          </div>
          <div>
            <img className="image-container" src={logo} alt="Portrait" />
          </div>
        </div>
      </div>
    </div>
  );
};
