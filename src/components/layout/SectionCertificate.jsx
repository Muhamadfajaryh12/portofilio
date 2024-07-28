import React, { useEffect, useState } from "react";
import certificateData from "../../utils/certificate.json";
import { Pagination, Card, Row, Col } from "react-bootstrap";

const SectionCertificate = (props) => {
  const { setModalShow, setAssets } = props;
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(certificateData.length / itemsPerPage);
  console.log(certificateData);
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

  return (
    <div className="bg-dark p-5" id="certificate">
      <Row md={3} className="g-4">
        {certificateData
          .slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
          .map((certificate, index) => (
            <Col key={index}>
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <img
                    src={certificate.image}
                    style={{ width: "100px" }}
                    alt=""
                  />
                  <small className="text-white text-center">
                    {certificate.name}
                  </small>
                </div>
              </a>
            </Col>
          ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Pagination className="mt-4" size="sm">
          {paginationItems}
        </Pagination>
      </div>
    </div>
  );
};

export default SectionCertificate;
