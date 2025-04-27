import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardProfile from "./CardProfile";
import dataLink from "../utils/link.json";
const Sidebar = () => {
  const nav = useLocation();

  return (
    <div className="w-1/4  bg-white h-screen rounded-md">
      <CardProfile />
      <ul className="p-0 mx-5">
        {dataLink.map((item) => (
          <li
            key={item.title}
            className={` p-2 rounded-md ${
              nav.pathname == item.link ? "bg-gray-200 font-bold" : ""
            }`}
          >
            <Link to={item.link} className=" text-decoration-none">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
