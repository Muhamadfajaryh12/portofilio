import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <>
      <div className="bg-gray-100  w-screen min-h-screen p-20 font-mono ">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
