import React from "react";
import "./experience.css";
import Tabs from "./tabs/tabs"

export const Experience = () => {
  return (
    <div className="section experience">
      <div className="center-grid">
        <h1 className="sectionHeading">
          01. <span className="sectionInside">Experience</span>
        </h1>
        <hr />
        <br />
        <Tabs>
          <div label="Eastside Preparatory School">
            <div className="experience-container">
              <h1 className="experience-title">Software Engineer Intern</h1>
              <h3 className="experience-subtitle">Summer of 2018 & 2019</h3>
              <ul className="experience-content text">
                <li>
                  Wrote a web-based guest management system for administrative
                  assistants to organize guest visits to the EPS campus.
                </li>
                <li>
                  Designed a website to track students’ usage of equipment in
                  the MakerSpace Lab to ensure all activity with the tools
                  complied with EPS’ policies.
                </li>
                <li>
                  Developed experience with functional programming (Elixir) and
                  database management (PostgreSQL).
                </li>
              </ul>
            </div>
          </div>
          <div label="University of Illinois">
            <div class="experience-container">
              <h1 className="experience-title">
                Undergraduate Research Assistant
              </h1>
              <h3 className="experience-subtitle">Spring 2019</h3>
              <ul className="experience-content text">
                <li>
                  Implementing a custom neural network architecture with
                  TensorFlow to predict delay states of airports across the
                  United States.
                </li>
                <li>
                  Researching the applications of combining both recurrent and
                  convolutional neural networks to interpret and analyze
                  temporal and spatial weather data.
                </li>
                <li>
                  Developing database solution with SQLite to stream data
                  directly into the prediction algorithm during the training and
                  testing phase.
                </li>
              </ul>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
