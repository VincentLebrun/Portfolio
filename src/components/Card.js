import {
  faExternalLinkAlt,
  faLink,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Card = ({ src, title, link }) => {
  return (
    <div>
      <div className="card">
        <img src={src} alt="" />
        <div className="overlay">
          <p>{title}</p>

          <div className="overwrapper">
            <div className="round">
              <a target="_blank" href={link} rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
            <div className="round">
              <FontAwesomeIcon className="icon" icon={faLongArrowAltRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
