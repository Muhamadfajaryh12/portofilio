import React from "react";
import CV from "../../public/assets/CV.pdf";
import { FaLinkedin } from "react-icons/fa";
import Blob from "../../public/blob.svg";
const Banner = () => {
  return (
    <div className="p-10">
      <div className="flex">
        <div className="">
          <h6 style={{ letterSpacing: "3px" }}>Hello!</h6>
          <h1 style={{ fontWeight: "bold" }}>
            I'm Muhamad Fajar Yudhistira Herjanto
          </h1>
          <h5 style={{ letterSpacing: "10px" }}>
            Frontend & Backend Developer
          </h5>
          <div className="mt-12 d-flex gap-2">
            <a
              className=" bg-blue-600 text-white text-lg font-semibold p-2 rounded-sm  hover:bg-blue-700 "
              href={CV}
              download={true}
              style={{ textDecoration: "none" }}
            >
              Visit my Linkedln
            </a>
            <a
              className=" bg-black  font-semibold p-2 rounded-sm text-white shadow-sm text-lg "
              href={CV}
              download={true}
              style={{ textDecoration: "none" }}
            >
              Visit my Github
            </a>
          </div>
        </div>
        <div className="">
          <img src={Blob} className="w-96" />
        </div>
      </div>

      {/* <div className="">
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
      </div> */}
    </div>
  );
};

export default Banner;
