import { useEffect, useState, useRef } from "react";
import ExperienceData from "../../utils/experience.json";
import ProjectData from "../../utils/education.json";
import Aos from "aos";

const SectionExperience = () => {
  return (
    <div className="bg-transparent flex justify-center">
      <div>
        <h5 className="font-bold text-3xl text-white  text-center">
          Pengalaman.
        </h5>
        <div className="w-24 my-4 h-2 rounded-full bg-cyan-400"></div>
        <p className="text-white text-sm">
          Pengalaman yang telah saya lalui berkarir sebagai programmer.
        </p>
      </div>
      <div className="w-full rounded-md  mx-auto grid grid-cols-2 gap-4 text-white">
        {ExperienceData.map((item, index) => (
          <div
            key={index}
            className={` 
            `}
          >
            <div className="border-2 border-cyan-400 p-2 w-12 h-12 flex justify-center items-center">
              <h1 className={` text-3xl font-bold `}>0{index + 1}</h1>
            </div>
            <div className=" w-full mt-4 relative  ">
              <h6 className="font-bold text-md">{item.name}</h6>
              <h6 className="font-bold text-sm">{item.date}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionExperience;
