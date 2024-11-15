import { useEffect } from "react";
import ExperienceData from "../../utils/experience.json";
import ProjectData from "../../utils/education.json";
import Aos from "aos";

const SectionExperience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-24">
      <h5
        className="font-bold text-6xl text-gray-500  text-center"
        data-aos="zoom-in"
      >
        Education.
      </h5>
      <div className="p-2 flex justify-center">
        <ol
          className="relative border-e border-gray-200  w-3/4  p-0"
          data-aos="zoom-in"
        >
          {ProjectData.map((item, index) => (
            <li
              className="my-3 mr-5 sm:mr-20 text-gray-300 text-end "
              key={index}
              data-aos="zoom-in"
            >
              <h6 className=" text-lg m-0 p-0">{item.nama}</h6>
              <span>
                {item.jurusan} | {item.tahun}
              </span>
              <h6>{item.nilai}</h6>
            </li>
          ))}
        </ol>
      </div>
      <h5
        className="font-bold text-6xl text-gray-500 text-center mt-10"
        data-aos="zoom-in"
      >
        Experience.
      </h5>
      <div className="p-2 flex justify-center ">
        <ol
          className="relative border-s border-gray-200 w-3/4 p-0"
          data-aos="zoom-in"
        >
          {ExperienceData.map((item, index) => (
            <li
              className="my-3 ml-5 sm:ml-20 text-gray-300"
              key={index}
              data-aos="zoom-in"
            >
              <h6 className=" text-lg m-0 p-0">{item.name}</h6>
              <span>
                {item.level} | {item.date}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SectionExperience;
