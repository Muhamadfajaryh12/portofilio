import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataSkill from "../../utils/skill.json";
const SectionSkill = ({ item }) => {
  return (
    <div className="flex gap-5 items-center bg-blue-600 p-10">
      <h4 className="font-semibold text-white">
        Saya memiliki keahlian dan pengalaman dalam mempelajari berbagai bahasa
        pemrograman dan framework.
      </h4>
      <div className="flex flex-wrap ">
        {DataSkill.map((item, index) => (
          <div key={index}>
            <div className=" w-24 m-2 bg-slate-50 rounded-md shadow-xl text-center font-bold p-2 ">
              <small style={{ fontSize: "14px", fontWeight: "500" }}>
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
