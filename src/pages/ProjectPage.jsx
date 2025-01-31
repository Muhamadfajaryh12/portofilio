import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import DataProjectWeb from "../utils/project.json";
import DataProjectMobile from "../utils/projectMobile.json";
const ProjectPage = () => {
  const [website, setWebsite] = useState(true);
  return (
    <MainLayout>
      <h4 className="font-bold tracking-widest uppercase">PROJECT</h4>

      <div className="flex gap-3 my-2">
        <button
          className={`tracking-widest uppercase  p-2 rounded-lg text-xs ${
            website ? "bg-blue-800 text-white font-bold" : ""
          }`}
          onClick={() => setWebsite(true)}
        >
          website
        </button>
        <button
          className={`tracking-widest uppercase  p-2 rounded-lg text-xs ${
            !website ? "bg-blue-800 text-white font-bold" : ""
          }`}
          onClick={() => setWebsite(false)}
        >
          mobile
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {website
          ? DataProjectWeb.map((item, index) => (
              <div key={index}>
                <img src={item.image} className="rounded-md border" />
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tech.map((tech, index) => (
                    <div
                      className="text-xs uppercase  bg-gray-200 font-semibold  p-1 rounded-sm mt-1"
                      key={index}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            ))
          : DataProjectMobile.map((item, index) => (
              <div key={index}>
                <img src={item.image} className="rounded-md  h-64" />
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tech.map((tech, index) => (
                    <div
                      className="text-xs uppercase  bg-gray-200 font-semibold  p-1 rounded-sm mt-1"
                      key={index}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </MainLayout>
  );
};

export default ProjectPage;
