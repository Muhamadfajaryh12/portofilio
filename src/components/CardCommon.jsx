import React from "react";

const CardCommon = ({ number, icon, title, style }) => {
  return (
    <div className="p-4 rounded-md bg-white shadow-sm  text-center flex justify-center gap-4 items-center">
      <div className={`rounded-md p-3 ${style}`}>{icon}</div>
      <div className="text-start">
        <h1 className="m-0 p-0 text-2xl font-bold">{number}</h1>
        <p className="font-bold text-gray-500 text-md m-0 p-0">{title}</p>
      </div>
    </div>
  );
};

export default CardCommon;
