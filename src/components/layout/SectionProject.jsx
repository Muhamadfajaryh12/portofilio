import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import data from "../../utils/project.json";

const SectionProject = (props) => {
  const { setModalShow } = props;
  const [category, setCategory] = useState("real");
  const typeClick = (props) => () => {
    setCategory(props);
  };
  const openModal = () => {
    setModalShow(true);
  };
  const filteredData = category
    ? data.filter((item) => item.category == category)
    : data;
  return (
    <div className="bg-dark" id="project">
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
      <Row xs={1} sm={2} md={5} className="g-4">
        {filteredData.map((item, index) => (
          <Col key={index}>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{item.name}</Tooltip>}
            >
              <Card
                className="h-100 text-center text-white border-dark shadow-sm"
                onClick={openModal}
              >
                <Card.Img src={item.image} alt="Card image" />
                <Card.ImgOverlay></Card.ImgOverlay>
              </Card>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SectionProject;
