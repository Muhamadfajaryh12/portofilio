import React from "react";
import ExperienceData from "../../utils/experience.json";

const SectionExperience = () => {
  return (
    <div className="flex justify-evenly my-4 items-center flex-wrap">
      <div className="text-center w-96">
        <p className=" fw-bolder text-4xl" style={{ letterSpacing: "2px" }}>
          Pengalaman
        </p>
        <p className=" fw-bolder text-lg">
          Pengalaman yang telah saya dapatkan sampai saat ini
        </p>
      </div>
      <div className="p-2">
        {ExperienceData.map((item, index) => (
          <div
            className={`relative flex items-center rounded-md my-3 shadow-md ${
              index % 2 == 0 ? `bg-blue-600 text-white` : `bg-gray-50`
            }`}
            key={item.name}
          >
            <div
              className={`w-5 h-5 absolute -left-10 transform -translate-x-2/4 rounded-full z-10  md:mt-0 shadow-sm ${
                index % 2 == 0 ? `bg-gray-200` : `bg-blue-600`
              }`}
            ></div>
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
            <div className="flex-auto p-2">
              <h1 className="text-sm ">{item.date}</h1>
              <h1 className="text-sm font-bold ">{item.name}</h1>
              <h3 className="text-sm  font-semibold">{item.level}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* <ol className="relative border-s border-gray-200 dark:border-gray-700">
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
      </ol> */}
    </div>
  );
};

export default SectionExperience;
