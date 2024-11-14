import Aos from "aos";
import React, { useEffect } from "react";

const Card = ({ name, image, tech, category }) => {
  console.log(name);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="h-full  my-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-sm p-3 relative  hover:-translate-y-10 duration-500"
    >
      <img src={image} alt="" className="rounded-md" />
      <h6 className="font-bold text-white text-2xl mx-1 mt-3">{name}</h6>
      <div className="text-white font-bold opacity-50 mx-1 my-2 text-lg">
        {category}
      </div>
      <div className="flex flex-wrap justify-start">
        {tech.map((item) => (
          <div className="text-blue-500 border-blue-500 border-1 text-xs font-bold rounded-md p-1 m-1">
            #{item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
