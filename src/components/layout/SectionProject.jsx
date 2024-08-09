import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import data from "../../utils/project.json";

const SectionProject = ({ item, isActive }) => {
  console.log(isActive);

  return (
    <div className={`section ${isActive ? "opacity-100" : "opacity-50"}`}>
      <h4 className="text-gray-200 fw-bolder" style={{ letterSpacing: "5px" }}>
        {item}
      </h4>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-8 ms-4" key={item.id}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-white">{item.name} </h3>
            <div className="d-flex gap-2 ">
              <img
                src={item.image}
                alt=""
                className={
                  item.category == "android" ? "w-32 h-42" : "w-62 h-40"
                }
              />
              <div className="">
                <p className="mb-4 text-base font-normal text-white dark:text-gray-400 w-62 p-2 text-justify">
                  {item.describe}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {item.tech?.map((item) => (
                    <span className="border-1 border-white  text-white font-semibold mx-1 p-1 text-xs">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SectionProject;
