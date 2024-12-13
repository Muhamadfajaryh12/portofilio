import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import SectionProject from "./components/layout/SectionProject";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <>
      <div className="bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />{" "}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<SectionProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
