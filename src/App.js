import React from "react";
import { About } from "./components/about/about";
import { Personal } from "./components/personal/personal";
import { Experience } from "./components/experience/experience";
import { Projects } from "./components/projects/projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <About />
      <div id="about">
        <Personal />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
