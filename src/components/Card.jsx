import Aos from "aos";
import React, { useEffect } from "react";

const Card = ({ name, image, tech, category, link }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="
      group h-full   "
    >
      <div className="absolute z-10 w-full h-0 group-hover:h-full bg-black opacity-80 transition-all duration-500 ease-in-out "></div>
      <div className="group-hover:block absolute hidden w-full h-full  z-30">
        <h6 className="font-bold text-xs sm:text-md  text-white text-center  mx-1 mt-3">
          {name}
        </h6>
        <div className=" font-bold text-xs sm:text-md text-white text-center mx-1 my-2 ">
          {category}
        </div>
        <div className="flex-wrap justify-center hidden sm:flex">
          {tech.map((item) => (
            <div
              key={item.name}
              className="bg-white opacity-95 border-1 text-xs sm:text-md font-bold rounded-md p-1 m-1"
            >
              {item.name}
            </div>
          ))}
        </div>
        {link ? (
          <a
            className="p-2 bg-white text-decoration-none  border-rounded flex justify-center mt-2"
            href={link}
            target="_blank"
          >
            Lihat
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="relative z-0">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;
