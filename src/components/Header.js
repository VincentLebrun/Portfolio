import { Col, Row } from "antd";
import React from "react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

export const Header = () => {
  return (
    <div className="headerWrapper">
      <Row>
        <Col span={12}>
          <div className="brand">
            <span className="orange">amine</span>.abdelli
            <span className="orange">
              ({" "}
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
        <Col span={12}>
          <div className="nav">
            <p>home</p>
            <p>project</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
