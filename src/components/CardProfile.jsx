import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange, MdOutlineEmail } from "react-icons/md";
import profileImage from "../../public/profile.png";

const CardProfile = () => {
  return (
    <div className="bg-white w-80 relative  h-[450px] rounded-lg p-4 shadow-md font-mono">
      <div className="absolute -top-20 inset-x-1/3  ">
        <img src={profileImage} className="w-32  bg-gray-200" alt="" />
      </div>
      <h6 className="font-black text-center text-sm mt-20 tracking-wider ">
        Muhamad Fajar Yudhistira Herjanto
      </h6>
      <p className="font-bold text-center text-sm">Web Developer</p>
      <div
        className="flex justify-evenly w-32 mx-auto"
        id="container-social-media"
      >
        <a href="https://www.linkedin.com/in/muhamadfajaryh" target="_blank">
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/Muhamadfajaryh12"
          target="_blank"
          className="text-black"
        >
          <FaGithub size={25} />
        </a>
        <FaInstagram size={25} />
      </div>
      <div className="my-4 bg-gray-200 p-2 rounded-md flex flex-column gap-2">
        <div className=" w-full flex items-center gap-2 ">
          <div className="bg-white p-2 rounded-md">
            <FaLocationDot size={20} className="text-red-500" />
          </div>
          <div>
            <p className="m-0 p-0 text-xs">Location</p>
            <p className="m-0 p-0 text-xs font-bold">Karawang, West Java</p>
          </div>
        </div>
        <div className=" w-full flex items-center gap-2 ">
          <div className="bg-white p-2 rounded-md">
            <MdDateRange size={20} className="text-violet-500" />
          </div>
          <div>
            <p className="m-0 p-0 text-xs">Birthday</p>
            <p className="m-0 p-0 text-xs font-bold">12/08/2002</p>
          </div>
        </div>
        <div className=" w-full flex items-center gap-2 ">
          <div className="bg-white p-2 rounded-md">
            <MdOutlineEmail size={20} className="text-green-500" />
          </div>
          <div>
            <p className="m-0 p-0 text-xs">Email</p>
            <p className="m-0 p-0 text-xs font-bold">
              fajaryudhistiraherjanto@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <a
          className="bg-blue-800 text-white font-semibold p-2 rounded-md text-xs tracking-widest uppercase text-decoration-none"
          href="/assets/CV.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default CardProfile;
