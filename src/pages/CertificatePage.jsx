import React from "react";
import MainLayout from "../components/layout/MainLayout";
import DataCertificate from "../utils/certificate.json";
import { Link } from "react-router-dom";
const CertificatePage = () => {
  return (
    <MainLayout>
      <h4 className="font-bold tracking-widest uppercase">CERTIFICATION</h4>
      <div className="flex gap-2 flex-wrap">
        {DataCertificate.map((item, index) => (
          <Link
            to={item.pdf}
            target="_blank"
            key={index}
            className="text-xs text-decoration-none text-black p-2 bg-gray-100 rounded-lg hover:bg-gray-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default CertificatePage;
