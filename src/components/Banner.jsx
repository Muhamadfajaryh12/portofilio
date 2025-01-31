import { useEffect } from "react";
import Blob from "../../public/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="p-10 flex flex-wrap text-white text-center  xl:h-screen justify-evenly items-center ">
      {/* <div className="w-96 h-96 relative bg-red-200 group">
        <div className=" absolute -z-0 w-0 h-full bg-red-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
        <img src={Blob} className="w-80 p-4 z-99 relative" alt="" />
      </div> */}
      <div className="mt-20">
        <h1 style={{ fontWeight: "bold" }} className="text-6xl">
          Muhamad Fajar Yudhistira Herjanto
        </h1>
        <h5 style={{ letterSpacing: "6px" }} className="font-bold text-5xl">
          Frontend & Backend Developer
        </h5>
        <div className="my-8 flex justify-center">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white text-lg font-semibold p-2 rounded-md   w-36 text-center ">
            Get Started
          </div>
        </div>
      </div>
      {/* <div className="relative m-2">
        <img src={Blob} className="w-80 p-4" alt="" />
        <div className="absolute top-0 left-0 border-t-8 border-l-8 border-blue-600 w-20 h-20"></div>
        <div className="absolute top-0 right-0 border-t-8 border-r-8 border-blue-600 w-20 h-20"></div>
        <div className="absolute bottom-0 right-0 border-b-8 border-r-8 border-blue-600 w-20 h-20"></div>
        <div className="absolute bottom-0 left-0 border-b-8 border-l-8 border-blue-600 w-20 h-20"></div>
      </div> */}
    </div>
  );
};

export default Banner;
