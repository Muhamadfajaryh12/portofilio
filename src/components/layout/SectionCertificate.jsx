import React, { useEffect, useState } from "react";
import certificateData from "../../utils/certificate.json";

const SectionCertificate = ({ item, isActive }) => {
  console.log(isActive);
  return (
    <div className={`mt-10 section ${isActive ? "opacity-100" : "opacity-50"}`}>
      <h6 className="text-gray-200 ">{item}</h6>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {certificateData.map((item) => (
          <li className="mb-10 ms-4" key={item.name}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.name}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SectionCertificate;
