import React, { useEffect, useState } from "react";
import certificateData from "../../utils/certificate.json";
import { FaArrowRight } from "react-icons/fa";

const SectionCertificate = ({ item, isActive }) => {
  console.log(isActive);
  return (
    <div className={`mt-10 section ${isActive ? "opacity-100" : "opacity-50"}`}>
      <h4 className="text-gray-200 fw-bolder" style={{ letterSpacing: "5px" }}>
        {item}
      </h4>{" "}
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {certificateData.map((item) => (
          <li className="mb-4 ms-4" key={item.name}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.from}
            </time>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <a
              className="bg-gray-100  rounded-lg p-1 d-flex justify-evenly items-center gap-1 hover:bg-gray-300 w-24 text-black"
              href={item.pdf}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <span className="fw-semibold">Open</span>
              <FaArrowRight size={13} />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SectionCertificate;
