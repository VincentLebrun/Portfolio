import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Rside = () => {
  return (
    <div className="rightSide">
      <div className="titles">
        <h1 className="name cream">Amine Abdelli</h1>
        <h1 className="orange">Developpeur Web</h1>
        <p className="cream">Recherche stage de développeur fullstack</p>
      </div>

      <div className="mainSection cream">
        <p>
          Ce <span className="orange">portfolio</span> est une fenetre ouverte
          sur mes projets, crée de toute pièce, du design à l'intégration, en
          passant part le back office, que je réalise avec beaucoup de plaisir
          et d'<span className="orange">enthousiasme</span>. <br />
          <br />
          Moi c'est Amine et tout récemment, j'ai mis de côté mon tablier de
          cuisinier pour entrer dans ce vaste univers qu'est le développement.
          Je suis un grand <span className="orange">curieux</span> de nature, un{" "}
          <span className="orange">autodidacte</span> et j'aime tout ce qui mèle
          à la fois technique et esthétique. J'aime comprendre les choses. La
          programmation est une discipline qui me passionne, et qui vient
          s'ajouter aux côtés de mes mes deux autres grandes{" "}
          <span className="orange">passions</span>, la cuisine, et la
          photographie. Bonne visite !
        </p>
      </div>
      <div className="logos">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/amine-abdelli"
        >
          <FontAwesomeIcon className="logo_hover" icon={faGithubAlt} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/amine-abdelli-b41623112/"
        >
          <FontAwesomeIcon className="logo_hover" icon={faLinkedin} />
        </a>
        <a href="mailto:amine.abdelli@outlook.fr">
          <FontAwesomeIcon className="logo_hover" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};
