import React from "react";
import MainLayout from "../components/layout/MainLayout";
import DataCertificate from "../utils/certificate.json";
import { Link } from "react-router-dom";
const CertificatePage = () => {
  return (
    <MainLayout>
      <div className="bg-white p-4 rounded-md">
        <h4 className="font-bold tracking-widest uppercase">Sertifikat</h4>
        <div className="grid grid-cols-3 gap-2">
          {DataCertificate.map((item, index) => (
            <div key={index} className="w-full">
              <img src={item.image} />
              <div className="w-full bg-gray-200 text-center text-black ">
                <Link
                  to={item.pdf}
                  target="_blank"
                  className="text-xs text-decoration-none "
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CertificatePage;
