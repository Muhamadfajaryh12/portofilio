import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import SectionProject from "./components/layout/SectionProject";
function App() {
  return (
    <>
      <div className=" " style={{ backgroundColor: "#181823" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />{" "}
          <Route path="/project" element={<SectionProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
