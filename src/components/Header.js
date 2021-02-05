import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-typewriting-effect";
import { AnimatePresence, motion } from "framer-motion";
import "react-typewriting-effect/dist/index.css";

export const Header = ({ style }) => {
  const c = "<";
  const f = "/>";
  return (
    <div className="headerWrapper">
      <Row>
        <Col span={12}>
          <div className="brand">
            <span className="orange">amine</span>.abdelli
            <span className="orange">
              (
              <span style={{ color: "#B22222" }} class="typeWritter">
                "
                <Typewriter
                  className="typo"
                  string="Hello_world"
                  delay={200}
                  cursor="|"
                />
                "
              </span>
              )
            </span>
          </div>
        </Col>
        <Col className="justify" span={12}>
          <div style={style} className="nav">
            <Link to="/">
              <p>accueil</p>
            </Link>
            <Link to="/projets">
              <p>projets</p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
