import React from "react";
import { Col, Row } from "antd";
import { useSpring, animated } from "react-spring";
import { Header } from "./Header";
import { motion } from "framer-motion";

const Projets = () => {
  const calc = (x, y) => [
    (y - window.innerHeight / 2) / 300,
    (x - window.innerWidth / 2) / 300,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tensions: 20, friction: 50 },
  }));
  return (
    <div>
      <Header />
      <Row>
        <Col className="leftMain" span={24} md={12}>
          <div>covidtracker</div>
          <div>bricotech83</div>
        </Col>
        <Col className="rightMain" span={24} md={12}>
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            className="browserWrapper"
          >
            <img
              className="browser"
              src={require("../img/browser.svg").default}
              alt=""
            />

            <img
              className="browserContent"
              src={require("../img/snapbricotech1.jpg").default}
              alt=""
            />
          </animated.div>
        </Col>
      </Row>
    </div>
  );
};

export default Projets;
