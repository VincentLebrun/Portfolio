import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useSpring, animated } from "react-spring";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { Card } from "./Card";
import { paragraphs } from "./Content";

const Projets = () => {
  // hooks
  const [content, setContent] = useState({
    p: paragraphs.default.text,
    src: paragraphs.default.src,
    desc: paragraphs.default.desc,
    title: paragraphs.default.title,
  });

  const onBgChange = (project) => {
    setContent({
      p: project.text,
      src: project.src,
      desc: project.desc,
      title: project.title,
    });
  };

  // End hooks
  // ANIMATION
  const calc = (x, y) => [
    (y - window.innerHeight / 2) / 100,
    (x - window.innerWidth / 2) / 100,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tensions: 20, friction: 50 },
  }));

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    // JSX //
    <motion.div
      variants={pageTransition}
      initial="out"
      animate="in"
      exit="out"
      className="projectsMain"
    >
      <Header />
      <div style={{ overflow: "hidden" }} className="projectsWrapper">
        {/* CONTENT */}
        <Row>
          {/* Colonne de gauche */}
          <Col span={24} lg={12} className="leftMain lc">
            <div className="introProject">
              {/* Titre MES PROJETS */}
              <motion.h1
                variants={pageTransition}
                animate="in"
                initial="out"
                transition={{ delay: 0.5 }}
              >
                mes projets
              </motion.h1>
              <motion.h3
                variants={pageTransition}
                animate="in"
                initial="out"
                transition={{ delay: 0.75 }}
              >
                <img src={require("../img/carbon.svg").default} alt="" /> Une
                partie des <span className="orange"> projets</span> que j'ai
                réalisé :
                <div className="skill">
                  <br />
                </div>
              </motion.h3>
            </div>
            <Row
              style={{ margin: 0 }}
              gutter={[24, 24]}
              justify="center"
              className="row"
            >
              <Col className="col">
                {/* CARDS */}
                <motion.div
                  variants={pageTransition}
                  animate="in"
                  initial="out"
                  transition={{ delay: 1 }}
                >
                  <Card
                    title={"Page web"}
                    src={require("../img/bricotech.svg").default}
                    link={"http://www.bricotech83.fr"}
                    project={paragraphs.bricotech}
                    onBgChange={onBgChange}
                  />
                </motion.div>
              </Col>
              <Col className="col">
                <motion.div
                  variants={pageTransition}
                  animate="in"
                  initial="out"
                  transition={{ delay: 1 }}
                >
                  <Card
                    title={"Application React"}
                    src={require("../img/covid.svg").default}
                    link={"https://covidtracker-24287.web.app/"}
                    project={paragraphs.coronavirus}
                    onBgChange={onBgChange}
                  />
                </motion.div>
              </Col>
            </Row>
          </Col>
          {/* Colonne de droite */}

          <Col span={24} lg={12} className="rs">
            <motion.h1
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="orange title"
            >
              {" "}
              {content.title}{" "}
            </motion.h1>

            {/* BROWSER SCREENSHOT */}
            <div className="rswrapper">
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
                className="browserz"
              >
                <motion.div
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 200, opacity: 0 }}
                  transition={{ delay: 0.7 }}
                  className="browsercontent"
                >
                  <img
                    className="browserimage"
                    src={require(`../img/${content.src}`).default}
                    alt="icon data"
                  />
                </motion.div>
              </animated.div>
              {/* DESCRIPTION PROJET */}
              <motion.p
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <img
                  style={{ width: "2rem" }}
                  src={require("../img/fluent.svg").default}
                  alt="icon stack"
                />{" "}
                {content.p}
              </motion.p>

              {/* TECHNO UTILISE DANS CE PROJET */}

              <motion.p
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ delay: 0.9 }}
              >
                {content.desc.call()}
              </motion.p>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Projets;

// <Default bOn={"block"} />
// <Covidtracker bOn={"block"} />
// <Bricotech bOn={"block"} />
