import React, { useState } from "react";
import SectionExperience from "./layout/SectionExperience";
import SectionProject from "./layout/SectionProject";
import SectionSkill from "./layout/SectionSkill";
import SectionCertificate from "./layout/SectionCertificate";

const ComponentModal = (props) => {
  const { onHide, onClose, content } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [modalPosition, setModalPosition] = useState({ top: 100, left: 100 });
  const [isDragging, setIsDragging] = useState(false);
  console.log(content);
  const renderContent = (content) => {
    switch (content) {
      case "Pengalaman":
        return <SectionExperience />;
      case "Project":
        return <SectionProject />;
      case "Keahlian":
        return <SectionSkill />;
      case "Sertifikat":
        return <SectionCertificate />;
      default:
        return;
    }
  };
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.clientX - modalPosition.left,
      y: e.clientY - modalPosition.top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newLeft = e.clientX - position.x;
      const newTop = e.clientY - position.y;
      setModalPosition({ left: newLeft, top: newTop });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="rounded bg-dark text-white"
      style={{
        width: "1200px",
        height: "auto",
        position: "absolute",
        top: modalPosition.top + "px",
        left: modalPosition.left + "px",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
    >
      <div className="d-flex justify-content-end align-items-center">
        <button onClick={onHide} className="bg-transparent border-0 text-white">
          =
        </button>
        <button
          onClick={onClose}
          className="bg-transparent border-0 text-white"
        >
          x
        </button>
      </div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ padding: "10px 20px", borderBottom: "1px solid #555" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="d-flex gap-1 m-1">
          <div
            className="rounded bg-danger"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <div
            className="rounded bg-warning"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <div
            className="rounded bg-success"
            style={{ width: "10px", height: "10px" }}
          ></div>
        </div>
        <h5 style={{ fontWeight: "500", margin: "0" }}>{content}</h5>
        <div className="d-flex gap-1 m-1">
          <div
            className="rounded bg-danger"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <div
            className="rounded bg-warning"
            style={{ width: "10px", height: "10px" }}
          ></div>
          <div
            className="rounded bg-success"
            style={{ width: "10px", height: "10px" }}
          ></div>
        </div>
      </div>
      <div className="p-4" style={{ maxHeight: "400px;", overflow: "auto" }}>
        {renderContent(content)}
      </div>
    </div>
  );
};

export default ComponentModal;
