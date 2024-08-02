import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataSkill from "../../utils/skill.json";
import Sphere from "../Sphere";
const SectionSkill = ({ item }) => {
  return (
    <div className="">
      <h6 className="text-gray-200">{item}</h6>
      <div className="d-flex flex-wrap ">
        {DataSkill.map((item, index) => (
          <div key={index}>
            <div className="d-flex gap-2 justify-content-center align-items-center m-2 border-1 border-gray-100 w-auto p-1">
              <img
                src={item.image}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <small
                style={{ fontSize: "12px", fontWeight: "500" }}
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
