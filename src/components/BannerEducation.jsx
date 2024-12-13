import React, { useEffect } from "react";
import Aos from "aos";
const BannerEducation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-1/2 mx-auto mt-24">
      <h5
        className="font-bold text-6xl text-gray-500  text-center"
        data-aos="zoom-in"
      >
        Education.
      </h5>{" "}
      <div className="relative group mt-10 w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <div className="group-hover:w-full bg-black opacity-10 w-0 h-full absolute z-10 transition-all ease-in-out duration-700 rounded-lg"></div>

        <div className="group-hover:w-full group-hover:left-0 transition-all ease-in-out duration-500 text-white z-99 absolute w-0 -left-40 opacity-100 h-full inset-0 ">
          <div className="bottom-0 absolute left-5">
            <h6 className="font-bold text-xl">
              Teknik Informatika / 2020 - 2024
            </h6>
            <h6 className="font-bold text-xl">IPK 3,94</h6>
          </div>
        </div>

        <img
          src="https://brainpersonalities.com/wp-content/uploads/2021/11/unsika-karawang.jpg"
          alt="Placeholder Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default BannerEducation;
