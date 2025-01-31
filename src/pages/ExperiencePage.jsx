import React from "react";
import MainLayout from "../components/layout/MainLayout";
import DataExperience from "../utils/experience.json";
import DataEducation from "../utils/education.json";
const ExperiencePage = () => {
  return (
    <MainLayout>
      <h4 className="font-bold tracking-widest uppercase">
        Experience & Education
      </h4>
      <div className="flex gap-5 mt-2">
        <div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-blue-600"></div>
            <h6 className="text-sm m-0 p-0 font-black text-blue-600">
              Experience
            </h6>
          </div>

          {DataExperience.map((item, index) => (
            <div key={index} className="my-3 p-2 bg-gray-200 rounded-sm">
              <h6 className="text-xs m-0 p-0 font-black">{item.name}</h6>
              <p className="text-xs m-0 p-0">{item.company}</p>
              <p className="text-xs m-0 p-0">
                {item.level} | {item.date}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-orange-600"></div>
            <h6 className="text-sm m-0 p-0 font-black text-orange-600">
              Education
            </h6>
          </div>
          {DataEducation.map((item, index) => (
            <div key={index} className="my-3 p-2 bg-gray-200 rounded-sm">
              <h6 className="text-xs m-0 p-0 font-black">{item.nama}</h6>
              <p className="text-xs m-0 p-0">{item.jurusan}</p>
              <p className="text-xs m-0 p-0">
                {item.nilai} | {item.tahun}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ExperiencePage;
