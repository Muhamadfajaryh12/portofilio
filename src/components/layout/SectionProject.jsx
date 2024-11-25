import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import data from "../../utils/project.json";

const SectionProject = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data.slice(0, 6));
  }, []);
  const handleViewMore = () => {
    setDatas(data.slice(0, datas.length + 3));
  };
  const handleViewLess = () => {
    if (datas.length > 7) {
      setDatas(data.slice(0, datas.length - 3));
    }
  };

  return (
    <div className="p-10">
      <h5
        className="font-bold text-6xl text-cyan-500  text-center mt-20"
        data-aos="zoom-in"
      >
        Project.
      </h5>
      {/* <div className="flex overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 sm:h-72 text-center "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 md:w-72 md:h-72 mx-auto  drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1 xl:grid-cols-3 lg:mx-24  my-20">
        {datas.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            image={item.image}
            tech={item.tech}
            category={item.category}
          />
        ))}
      </div>
      {/* <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={prevSlide}
          className={`bg-blue-700 text-white shadow-md hover:bg-blue-800 p-2 rounded-md font-semibold `}
          disabled={currentIndex <= 0}
          type="button"
        >
          Sebelumnya
        </button>
        <button
          onClick={nextSlide}
          className={`bg-blue-700 text-white shadow-md hover:bg-blue-800 p-2 rounded-md font-semibold`}
          disabled={currentIndex >= data.length - itemsPerSlide}
        >
          Selanjutnya
        </button>
      </div> */}
      <div className="flex justify-center gap-5 flex-wrap">
        <button
          className=" border-2 text-xl font-semibold border-cyan-400 p-3 w-52 text-cyan-400 hover:border-cyan-600 hover:text-cyan-600"
          onClick={handleViewLess}
        >
          View Less
        </button>

        <button
          className=" border-2 text-xl font-semibold border-cyan-400 p-3 w-52 text-cyan-400 hover:border-cyan-600 hover:text-cyan-600"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SectionProject;
