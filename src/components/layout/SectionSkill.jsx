import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataSkill from "../../utils/skill.json";
const SectionSkill = ({ item, isActive }) => {
  console.log(isActive);

  return (
    <div className={`section ${isActive ? "opacity-100" : "opacity-50"}`}>
      <h4 className="text-gray-200 fw-bolder" style={{ letterSpacing: "5px" }}>
        {item}
      </h4>{" "}
      <div className="d-flex flex-wrap ">
        {DataSkill.map((item, index) => (
          <div key={index}>
            <div className="d-flex gap-2 justify-content-center align-items-center m-2 border-1 border-gray-800 w-auto p-2 shadow-lg">
              <img src={item.image} alt="" style={{ height: "50px" }} />
              <small
                style={{ fontSize: "14px", fontWeight: "500" }}
                className="text-center text-gray-200"
              >
                {item.nama}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSkill;
