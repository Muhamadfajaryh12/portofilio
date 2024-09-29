import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import data from "../../utils/project.json";

const SectionProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= data.length - itemsPerSlide ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
    console.log(currentIndex == 0);
  };
  console.log(currentIndex);
  return (
    <div className="bg-blue-600 p-10">
      <p
        className="text-gray-200 font-bold text-3xl text-center"
        style={{ letterSpacing: "2px" }}
      >
        Project
      </p>
      <div className="flex overflow-hidden w-full relative">
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
      </div>
      <div className="flex justify-center gap-2 mt-4">
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
      </div>
    </div>
  );
};

export default SectionProject;
