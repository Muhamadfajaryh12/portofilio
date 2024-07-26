import React from "react";
import Wallpaper from "../../assets/wallpaper.webp";
import ShortcutJSON from "../../utils/shortcut.json";
const MainLayout = (props) => {
  const { setModalShow, handleShortcut } = props;
  const openModal = (data) => {
    setModalShow(true);
    handleShortcut(data);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="d-flex flex-column">
        {ShortcutJSON.map((item) => (
          <div className="" key={item.id}>
            <button
              className="bg-transparent border-0"
              style={{ width: "150px" }}
              onClick={() => openModal(item)}
            >
              <img src={item.image} alt="" style={{ width: "60px" }} />
              <p className="text-white text-center mt-2">{item.nama}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
