import React from "react";
import MainLayout from "../components/layout/MainLayout";
import DataSkill from "../utils/skill.json";
const AboutPage = () => {
  return (
    <MainLayout>
      <div className="">
        <h4 className="font-bold tracking-widest uppercase">About</h4>
        <p className="m-0 p-0">
          Hello my name Muhamad Fajar Yudhistira Herjanto, I'm Web Programmer.
        </p>
        <p className="m-0 p-0">Technology that I often use </p>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-5 gap-2">
          {DataSkill.map((item, index) => (
            <div
              key={index}
              className={`p-2  text-center font-bold text-white text-xs uppercase tracking-widest  rounded-md ${
                index % 2 == 0 ? "bg-orange-500" : "bg-blue-500"
              }`}
            >
              {item.nama}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
