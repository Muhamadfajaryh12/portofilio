import React from "react";
import ExperienceData from "../../utils/experience.json";

const SectionExperience = ({ item, isActive }) => {
  console.log(isActive);

  return (
    <div className={`section ${isActive ? "opacity-100" : "opacity-50"}`}>
      <h4 className="text-gray-200 fw-bolder" style={{ letterSpacing: "5px" }}>
        {item}
      </h4>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {ExperienceData.map((item) => (
          <li className="mb-4 ms-4" key={item.name}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.date}
            </time>
            <h3 className="m-0 text-lg font-semibold text-white">
              {item.name}
            </h3>
            <p className="m-0 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.level}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SectionExperience;
