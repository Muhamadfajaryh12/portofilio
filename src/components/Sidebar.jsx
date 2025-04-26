import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardProfile from "./CardProfile";
import dataLink from "../utils/link.json";
const Sidebar = () => {
  const nav = useLocation();

  return (
    <div className="w-1/4 w-full bg-white h-screen rounded-md">
      <CardProfile />
      <ul>
        {dataLink.map((item) => (
          <li key={item.title} className="text-decoration-none">
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
