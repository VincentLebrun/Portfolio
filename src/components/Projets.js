import React from "react";
import { Col, Row } from "antd";
import { useSpring, animated } from "react-spring";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "./Card";
const { Meta } = Card;

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
    <div className="projectsMain">
      <Header />
      <div className="projectsWrapper">
        {/* CONTENT */}

        <Row>
          <Col span={24} lg={12} className="leftMain lc">
            <div className="introProject">
              <p>
                <img src={require("../img/carbon.svg").default} alt="" /> Ici{" "}
                <span className="orange">mes projets</span> Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Quod culpa et molestiae
                animi velit dicta, voluptate nostrum laborum possimus. Ratione
                sit fugit perferendis perspiciatis fuga, nostrum voluptas hic.
                Necessitatibus, sit.
              </p>
            </div>
            <Row
              style={{ margin: 0 }}
              gutter={[24, 24]}
              justify="center"
              className="row"
            >
              <Col className="col">
                <Card
                  title={"HTML5 / CSS / JavaScript"}
                  src={require("../img/bricotech.svg").default}
                  link={"http://www.bricotech83.fr"}
                />
              </Col>
              <Col className="col">
                <Card
                  title={"React.js / FramerMotion / Apis"}
                  src={require("../img/covid.svg").default}
                  link={"https://covidtracker-24287.web.app/"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24} lg={12} className="rightSide"></Col>
        </Row>
      </div>
    </div>
  );
};

export default Projets;

// <div className="content">
//           <Row>
//             <Col className="left" span={12}>
//               <Row justify="space-around" className="row">
//                 <Col>
//                   <Card
//                     title={"HTML5 / CSS / JavaScript"}
//                     src={require("../img/bricotech.svg").default}
//                     link={"http://www.bricotech83.fr"}
//                   />
//                 </Col>
//                 <Col>
//                   <Card
//                     title={"React.js / FramerMotion / Apis"}
//                     src={require("../img/covid.svg").default}
//                     link={"https://covidtracker-24287.web.app/"}
//                   />
//                 </Col>
//               </Row>
//             </Col>
//             <Col className="right" span={12}></Col>
//           </Row>
//         </div>

// <animated.div
// onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
// onMouseLeave={() => set({ xys: [0, 0, 1] })}
// style={{ transform: props.xys.interpolate(trans) }}
// className="browserWrapper"
// >
// <img
//   className="browser"
//   src={require("../img/browser.svg").default}
//   alt=""
// />

// <img
//   className="browserContent"
//   src={require("../img/snapbricotech1.jpg").default}
//   alt=""
// />
// </animated.div>
