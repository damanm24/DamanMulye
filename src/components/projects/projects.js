import React from "react";
import "./projects.css";
import Tile from "./tile/tile";

export class Projects extends React.Component {
  
  render() {
    return (
      <div>
        <div className="section projects">
          <div className="center-item">
            <h1 className="sectionHeading">
              02 . <span className="sectionInside">Projects</span>
            </h1>
            <hr />
            <br />
            <div className="tile-holder">
              <Tile
                name={"Discovir"}
                description={
                  "A network-graph based recommender system using Spotify API and collaborative filtering algorithm."
                }
                tags={["Neo4j", "Spotify API", "React.js"]}
                links={["https://github.com/damanm24/Discovir"]}
              />
              <Tile
                name={"Lyric Visualizer"}
                description="A web-app that analyzes reptition in songs using LZW Compression and Co-Occurance matricies."
                tags={["Angular", "d3", "Rx.js"]}
                links={[
                  "https://github.com/Ethernetz/lyric-visualizer",
                  "",
                  "https://song-visualizer.firebaseapp.com/"
                ]}
              />
              <Tile
                name={"Audio Reactive LED Lights"}
                description="An Arduino project that uses a microphone sensor and LED lights and creates a visualization based on the detected frequencies."
                tags={["Arduino", "C++"]}
                links={[
                  "https://gist.github.com/damanm24/dfd5dffd675de4ff1bfe0b5aa24b7341",
                  "https://medium.com/@damanmulye/wiki-project-music-reactive-led-strip-b543cfdf8a0c"
                ]}
              />
              <Tile
                name={"Scan2Plan"}
                description="An iOS application that uses Optical Character Recognition and Natural Language Processing to extract event information from fliers and add them to the users calendar."
                tags={["Swift", "Google's MLKit", "Swift Natural Language Processing"]}
                links={["https://github.com/jookimmy/scan2plan"]}
              />
              <Tile
                name={"HTMLHint"}
                description="Contributor to the popular HTML linter, HTML Hint. Won the award for 'Best Contribution to Development Tools' at HackIllinois 2019 for commits made to the project."
                tags={["JavaScript", "Node.js"]}
                links={["https://github.com/htmlhint/HTMLHint"]}
              />
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="inner-text">
            <p className="contact-text">
              I'm always looking for exciting and new opportunities! So let me
              know how I can help you in your project! You can contact me
              through my social media links or <a className="link-text" href={"mailto:dmulye2@illinois.edu"} >shoot me an email.</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
