import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import data from "../../utils/project.json";

const SectionProject = ({ item }) => {
  return (
    <div className="p-2">
      <h6 className="text-gray-200 ">{item}</h6>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-10 ms-4" key={item.id}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-white">{item.name} </h3>
            <img src={item.image} alt="" className="w-32" />
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

export default SectionProject;
