import React from "react";
import { motion } from "framer-motion";

const style = {
  textAlign: "justify",
};

const img = () => (
  <img alt="icone stack" src={require("../img/stack-light.svg").default} />
);

export const Default = () => {
  return (
    <div style={style} className={`real`}>
      {/* TECHNOLOGIES */}
      <p>
        {img.call()} Portfolio réalisé avec{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-language-html5.svg").default}
            alt="icon html"
          />
        </span>
        HTML,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-sass.svg").default}
            alt="icon sass"
          />
        </span>
        Sass,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/fluent-javascript-20-regular.svg").default}
            alt="icon react"
          />
        </span>
        JavaScript,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-react.svg").default}
            alt="icon react"
          />
        </span>
        React.js, AntDesign et Framermotion.{" "}
      </p>
    </div>
  );
};

export const Bricotech = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 300 }}
      transition={{ duration: 0.5 }}
      style={style}
      className={`real`}
    >
      <p>
        {img.call()} Projet réalisé en{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-language-html5.svg").default}
            alt="icon html"
          />
        </span>
        HTML,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/BiBootstrap.svg").default}
            alt="icon bootstrap"
          />
        </span>
        Bootstrap,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-sass.svg").default}
            alt="icon sass"
          />
        </span>
        Sass,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/fluent-javascript-20-regular.svg").default}
            alt="icon javascript"
          />
        </span>
        JavaScript et ScrollReveal.js.{" "}
      </p>
    </motion.div>
  );
};

export const Covidtracker = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 300 }}
      transition={{ duration: 0.5 }}
      style={style}
      className={`real`}
    >
      {/* TECHNOLOGIES */}
      <p style={{ textAlign: "justify" }}>
        {img.call()} Projet réalisé avec{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-language-html5.svg").default}
            alt="icon html"
          />
        </span>
        HTML,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-sass.svg").default}
            alt="icon sass"
          />
        </span>
        Sass,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/fluent-javascript-20-regular.svg").default}
            alt="icon react"
          />
        </span>
        JavaScript,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-react.svg").default}
            alt="icon react"
          />
        </span>
        React.js,{" "}
        <span>
          <img
            className="svg"
            src={require("../img/mdi-api.svg").default}
            alt="icon api"
          />
        </span>
        Axios, mapbox-gl.js, Chart.js AntDesign et Framermotion.{" "}
      </p>
    </motion.div>
  );
};

export const paragraphs = {
  default: {
    title: "Portfolio",
    src: "blank.png",
    text: "Veuillez selectionner un projet.",
    desc: () => {
      return (
        <div>
          <Default />
        </div>
      );
    },
  },
  bricotech: {
    title: "Bricotech",
    src: "btsnap1.png",
    srcbis: "btsnap2.png",
    text:
      "Ceci est mon tout premier projet web réalisé pour l'entreprise de bricolage bricotech basée à Toulon. Ici une simple page vitrine affichant les services proposés, les coordonnées de l'entreprise ainsi qu'un formulaire de contact.",
    desc: () => {
      return (
        <div>
          <Bricotech />
        </div>
      );
    },
  },
  coronavirus: {
    title: "Covidtracker",
    src: "cdsnap1.png",
    srcbis: "cdsnap2.png",
    text:
      "Application de visualisation de données relatives au coronavirus. Celle-ci nous permet de voir à l'aide d'une carte et d'un graphique l'évolution du coronavirus depuis le 1er Janvier 2020. Les données sont extraites d'API publique puis injectées dans l'interface graphique.",
    desc: () => {
      return (
        <div>
          <Covidtracker />
        </div>
      );
    },
  },
};
