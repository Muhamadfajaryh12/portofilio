import React from "react";
import { useState } from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import data from "../../utils/project.json";
const SectionProject = () => {
  const [category, setCategory] = useState("");
  const typeClick = (props) => () => {
    setCategory(props);
  };

  const filteredData = category
    ? data.filter((item) => item.category == category)
    : data;

  return (
    <div className="bg-dark p-5" id="project">
      <h2
        className="text-white text-center fw-bold"
        style={{ letterSpacing: "3px" }}
      >
        - PROJECT -
      </h2>
      <Nav fill variant="tabs" defaultActiveKey="" className="my-4">
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={typeClick("real")}>
            Real Project
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={typeClick("dummy")}>
            Dummy Project
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row xs={1} md={3} className="g-4">
        {filteredData.map((item, index) => (
          <Col key={index}>
            <Card className="h-100 text-center text-white">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SectionProject;
