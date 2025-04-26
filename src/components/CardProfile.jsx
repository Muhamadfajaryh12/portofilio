import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange, MdOutlineEmail } from "react-icons/md";
import profileImage from "../../public/profile.png";

const CardProfile = () => {
  return (
    <div className="bg-white w-80 relative  my-4 h-[450px] rounded-lg font-mono">
      <img src={profileImage} className="w-32 mx-auto  bg-gray-200" alt="" />

      <h6 className="font-black text-center text-sm mt-4 tracking-wider ">
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
