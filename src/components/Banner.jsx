import { useEffect } from "react";
import Blob from "../../public/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="p-10 flex h-screen justify-evenly items-center flex-wrap text-white"
      data-aos="zoom-in"
    >
      <div className="">
        <h6 style={{ letterSpacing: "3px" }}>Hello!</h6>
        <h1 style={{ fontWeight: "bold" }}>
          I'm Muhamad Fajar Yudhistira Herjanto
        </h1>
        <h5
          style={{ letterSpacing: "6px" }}
          className="font-bold text-4xl opacity-50"
        >
          Frontend & Backend Developer
        </h5>{" "}
        <h6 style={{ letterSpacing: "2px" }} className="w-3/4 my-4">
          Merupakan Fresh Graduate Program Studi Informatika dari Universitas
          Singaperbangsa Karawang
        </h6>
        <div className="my-8 d-flex gap-2">
          <a
            className=" border-blue-600 border-2  text-blue-600 text-lg font-semibold p-2 rounded-md  hover:border-blue-700 w-36 text-center "
            href="https://www.linkedin.com/in/muhamadfajaryh"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Linkedln
          </a>
          <a
            className=" border-gray-600 border-2 font-semibold p-2 rounded-md text-white shadow-sm text-lg w-36 text-center "
            href={"https://github.com/Muhamadfajaryh12"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Github
          </a>
        </div>
      </div>
      <div className="relative m-2">
        <img src={Blob} className="w-80 p-4" alt="" />
        <div className="absolute top-0 left-0 border-t-8 border-l-8 border-blue-600 w-20 h-20"></div>
        <div className="absolute top-0 right-0 border-t-8 border-r-8 border-blue-600 w-20 h-20"></div>
        <div className="absolute bottom-0 right-0 border-b-8 border-r-8 border-blue-600 w-20 h-20"></div>
        <div className="absolute bottom-0 left-0 border-b-8 border-l-8 border-blue-600 w-20 h-20"></div>
      </div>
    </div>
  );
};

export default Banner;
