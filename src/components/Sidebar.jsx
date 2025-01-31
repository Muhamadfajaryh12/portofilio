import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiCertificate, PiShareNetwork } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const nav = useLocation();
  return (
    <div className="flex xl:flex-col justify-center items-center gap-3 xl:h-56 bg-white p-2  w-auto xl:w-14 rounded-md shadow-md">
      <Link
        to={"/"}
        className={`p-2  rounded-md  ${
          nav.pathname == "/"
            ? "bg-blue-800 text-white"
            : " text-black hover:bg-blue-800 hover:text-white"
        }`}
      >
        <CiUser size={20} />
      </Link>
      <Link
        to={"/experience"}
        className={`p-2  rounded-md  ${
          nav.pathname == "/experience"
            ? "bg-blue-800 text-white"
            : " text-black hover:bg-blue-800 hover:text-white"
        }`}
      >
        <PiShareNetwork size={20} />
      </Link>
      <Link
        to={"/project"}
        className={`p-2  rounded-md  ${
          nav.pathname == "/project"
            ? "bg-blue-800 text-white"
            : " text-black hover:bg-blue-800 hover:text-white"
        }`}
      >
        <MdOutlineWorkOutline size={20} />
      </Link>
      <Link
        to={"/certificate"}
        className={`p-2  rounded-md  ${
          nav.pathname == "/certificate"
            ? "bg-blue-800 text-white"
            : " text-black hover:bg-blue-800 hover:text-white"
        }`}
      >
        <PiCertificate size={20} />
      </Link>
    </div>
  );
};

export default Sidebar;
