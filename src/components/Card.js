import React from "react";
import { faLink, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({ src, title, link, project, onBgChange }) => {
  return (
    <div
      onClick={() => {
        onBgChange(project);
      }}
    >
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
    </div>
  );
};
