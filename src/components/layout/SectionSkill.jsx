import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataSkill from "../../utils/skill.json";
const SectionSkill = () => {
  return (
    <div className="bg-dark p-5" id="skills">
      <h2
        className="text-white text-center fw-bold"
        style={{ letterSpacing: "3px" }}
      >
        - SKILLS -
      </h2>
      <div className="p-5">
        <Row xs={1} sm={3} md={5} className="g-4">
          {DataSkill.map((item, index) => (
            <Col key={index}>
              <Card className="h-100 text-center bg-transparent text-white shadow-lg border-secondary">
                <Card.Img variant="top" src="holder.js/100px180" />{" "}
                <Card.Body>
                  <Card.Title>{item.nama}</Card.Title>
                  <Card.Text>{item.level}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SectionSkill;
