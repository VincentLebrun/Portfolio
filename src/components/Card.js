import React from "react";
import { faLink, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Card = ({ src, title, link, project, onBgChange }) => {
  return (
    <div
      onClick={() => {
        onBgChange(project);
      }}
    >
      
      <AnchorLink href='#projectAnchor'>
      <div className="card">
        <img src={src} alt="" />
        <div className="overlay">
          <p>{title}</p>

          <div className="overwrapper">
            <a target="_blank" href={link} rel="noreferrer">
              <div className="round">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </div>
            </a>
            <div
              className="round"
              onClick={() => {
                onBgChange(project);
              }}
            >
              <FontAwesomeIcon className="icon" icon={faLongArrowAltRight} />
            </div>
          </div>
        </div>
      </div>
      </AnchorLink>
    </div>
  );
};
