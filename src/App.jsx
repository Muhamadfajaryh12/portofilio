import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Banner from "./components/Banner";
import SectionCertificate from "./components/layout/SectionCertificate";
import SectionExperience from "./components/layout/SectionExperience";
import SectionProject from "./components/layout/SectionProject";
import SectionSkill from "./components/layout/SectionSkill";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const sectionRefs = {
    experience: useRef(null),
    skill: useRef(null),
    project: useRef(null),
    certificate: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    const sections = Object.values(sectionRefs);
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });
    console.log(activeSection);

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);
  useEffect(() => {
    if (activeSection) {
      sectionRefs[activeSection].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeSection]);
  return (
    <>
      <div className="bg-gray-900 w-screen h-screen d-flex">
        <Banner isActive={activeSection} />
        <div className="h-screen overflow-auto w-1/2">
          <div ref={sectionRefs.experience} id="experience" className="mt-32">
            <SectionExperience
              item="PENGALAMAN"
              isActive={activeSection === "experience"}
            />
          </div>
          <div ref={sectionRefs.skill} id="skill" className="my-32">
            <SectionSkill
              item="KEAHLIAN"
              isActive={activeSection === "skill"}
            />
          </div>
          <div ref={sectionRefs.project} id="project" className="mt-32">
            <SectionProject
              item="PROJECT"
              isActive={activeSection === "project"}
            />
          </div>
          <div ref={sectionRefs.certificate} id="certificate" className="mt-32">
            <SectionCertificate
              item="SERTIFIKAT"
              isActive={activeSection === "certificate"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
