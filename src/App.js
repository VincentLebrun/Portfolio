import React from "react";
import "antd/dist/antd.css";
import "./sass/App.scss";
import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";

import { Lside } from "./components/Lside";
import { Rside } from "./components/Rside";
import { Header } from "./components/Header";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" className="main">
      <Header />

      <Row>
        <Col span={24} lg={12}>
          <Lside />
        </Col>
        <Col span={24} lg={12}>
          <Rside />
        </Col>
      </Row>
    </motion.div>
  );
};

export default App;
