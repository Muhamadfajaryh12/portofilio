import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataSkill from "../../utils/skill.json";
import Sphere from "../Sphere";
const SectionSkill = () => {
  return (
    <div id="skills">
      <div className="">
        <Row xs={1} sm={3} md={6} className="g-4">
          {DataSkill.map((item, index) => (
            <Col key={index}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <small
                  style={{ fontSize: "12px", fontWeight: "500" }}
                  className="text-center"
                >
                  {item.nama}
                </small>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SectionSkill;
