import React from "react";
import PropTypes from "prop-types";
import "./tile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons";

const Tile = ({ name, links, description, tags }) => {
  const map_links = links => {
    return links.map((link, index) => {
      let iconToUse;
      if (index === 0) {
        iconToUse = faGithub;
      } else if (index === 1) {
        iconToUse = faMediumM;
      } else {
        iconToUse = faGlobe
      }
      return (
        <a href={link}>
          <FontAwesomeIcon
            style={{ paddingBottom: 0, paddingRight: 15 }}
            icon={iconToUse}
            className="icon"
            size="1x"
          />
        </a>
      );
    });
  };

  const print_tags = tags => {
    return tags.map(tag => {
      return (<span className="tag">{tag}</span>);
    });
  }

  return (
    <div className="tile-container">
      <header>
        <div>
          <FontAwesomeIcon
            style={{ paddingBottom: 0, paddingLeft: 15 }}
            color="#ff6768"
            icon={faTerminal}
            className=""
          />
        </div>
        <div className="folder-icons">{map_links(links)}</div>
      </header>
      <div className="tile-body">
        <h2>{name}</h2>
        <div className="tile-description">
          <p className="text">{description}</p>
        </div>
      </div>
      <footer>{print_tags(tags)}</footer>
    </div>
  );
};

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};

Tile.defaultProps = {
  name: "test",
  links: ["test", "test1", "test2"],
  tags: ["React", "Spotify API"],
  description: "Example description text"
};

export default Tile;
