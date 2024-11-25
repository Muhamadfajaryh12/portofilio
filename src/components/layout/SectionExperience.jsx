import { useEffect } from "react";
import ExperienceData from "../../utils/experience.json";
import ProjectData from "../../utils/education.json";
import Aos from "aos";
import ProgressBar from "./ProgressBar";

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

      <div className="flex flex-col justify-center items-center relative my-10">
        <div className="border-2 border-dashed border-cyan-400 absolute h-full"></div>
        {ExperienceData.map((item, index) =>
          index % 2 == 0 ? (
            <div className="flex text-white  " key={index}>
              <div className="w-1/2">
                <div className="mr-10 text-justify">
                  <h2 className="text-2xl text-end">{item.name}</h2>
                  <h6 className="text-end">{item.date}</h6>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptate ipsa earum! Iste autem nesciunt et
                    praesentium maxime expedita, deserunt perferendis accusamus
                    nemo nam sunt alias asperiores labore eum recusandae tempore
                    itaque. Nihil praesentium voluptatem repudiandae, recusandae
                    harum, tenetur temporibus nam vel explicabo impedit aperiam
                    eveniet ab? Maxime voluptatum quis quisquam asperiores
                    omnis, rem deserunt?
                  </p>
                  <img src={item.image} className="rounded-lg w-96" alt="" />
                </div>
              </div>
              <div className="relative -left-8">
                <div className="w-16 h-16 rounded-full border-white border-4 text-white text-center p-2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-white border-4 text-white text-center flex items-center justify-center bg-blue-900">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex text-white my-10 flex-row-reverse "
              key={index}
            >
              <div className="w-1/2">
                <div className="ml-10 text-justify">
                  <h2 className="text-2xl">{item.name}</h2>
                  <h6>{item.date}</h6>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptate ipsa earum! Iste autem nesciunt et
                    praesentium maxime expedita, deserunt perferendis accusamus
                    nemo nam sunt alias asperiores labore eum recusandae tempore
                    itaque. Nihil praesentium voluptatem repudiandae, recusandae
                    harum, tenetur temporibus nam vel explicabo impedit aperiam
                    eveniet ab? Maxime voluptatum quis quisquam asperiores
                    omnis, rem deserunt?
                  </p>
                  <img src={item.image} className="rounded-lg w-96" alt="" />
                </div>
              </div>
              <div className="relative -right-8">
                <div className="w-16 h-16 rounded-full border-white border-4 text-white text-center p-2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-white border-4 text-white text-center flex items-center justify-center bg-blue-900">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <ProgressBar />
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
