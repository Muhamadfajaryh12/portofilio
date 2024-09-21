import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DataSkill from "../../utils/skill.json";
const SectionSkill = ({ item }) => {
  return (
    <div className="flex gap-5 items-center bg-blue-600 p-10  justify-evenly flex-wrap">
      <h5 className="font-bold text-2xl text-slate-50 text-center">
        Dengan keahlian dan pengalaman dalam berbagai bahasa pemrograman dan
        framework.
      </h5>
      <div className="flex flex-wrap justify-center">
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
