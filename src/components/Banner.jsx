import React from "react";
import CV from "../../public/assets/CV.pdf";
import { FaLinkedin } from "react-icons/fa";

const Banner = ({ isActive }) => {
  return (
    <div className="  text-white mt-32 ml-12 w-1/2">
      <h6 style={{ letterSpacing: "3px" }}>Hello!</h6>
      <h1 style={{ fontWeight: "bold" }}>
        I'm Muhamad Fajar Yudhistira Herjanto
      </h1>
      <h5 style={{ letterSpacing: "10px" }}>Frontend & Backend Developer</h5>
      <h6 style={{ letterSpacing: "3px", maxWidth: "690px" }}>
        I am a fresh graduate from the University of Singaperbangsa Karawang
        informatics study program. I have internship and independent study
        experience.
      </h6>
      <div className="">
        <ul className="fw-bold mt-10" style={{ letterSpacing: "3px" }}>
          <li
            className={`my-2 text-xl ${
              isActive == "experience" ? `opacity-100` : `opacity-50`
            }`}
          >
            PENGALAMAN
          </li>
          <li
            className={`my-2 text-xl ${
              isActive == "skill" ? `opacity-100` : `opacity-50`
            } `}
          >
            KEAHLIAN
          </li>
          <li
            className={`my-2 text-xl ${
              isActive == "project" ? `opacity-100` : `opacity-50`
            } `}
          >
            PROJECT
          </li>
          <li
            className={`my-2 text-xl ${
              isActive == "certificate" ? `opacity-100` : `opacity-50`
            } `}
          >
            SERTIFIKAT
          </li>
        </ul>
      </div>
      <div className="mt-12 d-flex gap-2">
        <a
          className=" bg-gray-100 text-dark font-semibold p-2 rounded-sm  hover:bg-gray-300 "
          href={CV}
          download={true}
          style={{ textDecoration: "none" }}
        >
          DOWNLOAD CV
        </a>
        <a
          href="www.linkedin.com/in/muhamadfajaryh"
          className="bg-white p-0 m-0"
        >
          <FaLinkedin className="text-white" size={40} />
        </a>
      </div>
    </div>
  );
};

export default Banner;
