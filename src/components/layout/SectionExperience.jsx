import { useEffect, useState, useRef } from "react";
import ExperienceData from "../../utils/experience.json";
import ProjectData from "../../utils/education.json";
import Aos from "aos";

const SectionExperience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef([]);
  const handleVisibilityChange = (entries) => {
    console.log(sectionRef, "section");
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        console.log(entry.isIntersecting, index);
        setActiveIndex(index);
      }
    });
  };
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.1,
    });

    sectionRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sectionRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="mt-24">
      <h5
        className="font-bold text-6xl text-gray-500  text-center"
        data-aos="zoom-in"
      >
        Experience.
      </h5>
      <div className="w-full sm:w-1/2 rounded-md  mx-auto">
        {ExperienceData.map((item, index) => (
          <div
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            key={index}
            className={` group w-full h-96 relative my-5 ${
              index % 2 == 0 ? "sm:-left-20" : "sm:-right-20"
            }`}
          >
            <h1
              className={`absolute  top-0 text-white text-8xl font-bold z-30 ${
                index % 2 == 0 ? "left-2" : "right-2"
              }`}
            >
              0{index + 1}
            </h1>
            {/* <div className="bg-blue-900 w-full h-0 absolute group-hover:h-full z-20 transition-all ease-in-out duration-700 rounded-md">
              <div className="hidden group-hover:flex justify-center items-center h-full ">
                <button className="bg">Dev</button>
              </div>
            </div> */}
            <div className="absolute w-full bottom-0 text-white z-30 opacity-100">
              <div className="bottom-0 absolute left-5">
                <h6 className="font-bold text-xl">{item.name}</h6>
                <h6 className="font-bold text-xl">{item.date}</h6>
              </div>
            </div>
            <div className="bg-black w-full opacity-20 absolute rounded-md h-full z-20 "></div>
            <img
              src={`${item.image}`}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col justify-center items-center relative my-10">
        <div className="border-2 border-dashed border-cyan-400 absolute h-full"></div>
        {ExperienceData.map((item, index) =>
          index % 2 == 0 ? (
            <div
              className="flex text-white  "
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
            >
              <div className="w-1/2">
                <div className="mr-10 text-justify">
                  <h2
                    className={`text-2xl text-end ${
                      activeIndex === index ? "text-yellow-400" : ""
                    }`}
                  >
                    {item.name}
                  </h2>
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
              className="flex text-white my-96 flex-row-reverse "
              key={index}
              ref={(el) => (sectionRef.current[index] = el)}
            >
              <div className="w-1/2">
                <div className="ml-10 text-justify">
                  <h2
                    className={`text-2xl text-end ${
                      activeIndex === index ? "text-yellow-400" : ""
                    }`} // Highlight active index
                  >
                    {item.name}
                  </h2>
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
      </div> */}
    </div>
  );
};

export default SectionExperience;
