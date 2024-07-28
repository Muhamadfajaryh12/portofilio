import React, { useState } from "react";
import Wallpaper from "../../assets/wallpaper.webp";
import ShortcutJSON from "../../utils/shortcut.json";

const MainLayout = (props) => {
  const { setModalShow, handleShortcut, handleContent, uniqueID, setUniqueID } =
    props;
  const openModal = (data) => {
    setModalShow({ ...data, uniqueId: uniqueID, title: data.nama });
    handleShortcut({ ...data, uniqueId: uniqueID + 1 });
    handleContent(data.nama);
    setUniqueID(uniqueID + 1);
  };
  return (
    <div>
      <div className="d-flex flex-column p-2">
        {ShortcutJSON.map((item) => (
          <div className="" key={item.id}>
            <button
              className="bg-transparent border-0"
              style={{ width: "150px" }}
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: "60px ", height: "60px" }}
              />
              <p
                className="text-white text-center mt-2"
                style={{ fontSize: "12px" }}
              >
                {item.nama}
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
