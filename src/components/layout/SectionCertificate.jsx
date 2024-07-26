import React, { useEffect, useState } from "react";
import certificateData from "../../utils/certificate.json";
import { Pagination, Card, Row, Col } from "react-bootstrap";

const SectionCertificate = (props) => {
  const { setModalShow, setAssets } = props;
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(certificateData.length / itemsPerPage);
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handlePageClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const openModal = (param) => {
    setModalShow(true);
    setAssets(param);
  };

  return (
    <div className="bg-dark p-5" id="certificate">
      <h2
        className="text-white text-center fw-bold"
        style={{ letterSpacing: "3px" }}
      >
        - CERTIFICATE -
      </h2>
      <Row md={3} className="g-4">
        {certificateData
          .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
          .map((certificate, index) => (
            <Col key={index}>
              <Card
                className="h-100 text-center text-white border-dark shadow-sm"
                onClick={() => openModal(certificate.pdf)}
              >
                <Card.ImgOverlay></Card.ImgOverlay>
                <h1 className="text-dark">{certificate.name}</h1>
              </Card>
            </Col>
          ))}
      </Row>
      <Pagination className="mt-4" size="sm">
        {paginationItems}
      </Pagination>
    </div>
  );
};

export default SectionCertificate;
