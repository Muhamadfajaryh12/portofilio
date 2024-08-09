import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Banner from "./components/Banner";
import SectionCertificate from "./components/layout/SectionCertificate";
import SectionExperience from "./components/layout/SectionExperience";
import SectionProject from "./components/layout/SectionProject";
import SectionSkill from "./components/layout/SectionSkill";
import * as THREE from "three";
function App() {
  const [activeSection, setActiveSection] = useState("");
  const mountRef = useRef(null);

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
  useEffect(() => {
    let scene, camera, renderer;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const starsGeometry = new THREE.Geometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
    });

    for (let i = 0; i < 1000; i++) {
      const star = new THREE.Vector3();
      star.x = THREE.MathUtils.randFloatSpread(2000);
      star.y = THREE.MathUtils.randFloatSpread(2000);
      star.z = THREE.MathUtils.randFloatSpread(2000);

      starsGeometry.vertices.push(star);
    }

    const starField = new THREE.Points(starsGeometry, starMaterial);
    scene.add(starField);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full" ref={mountRef} />
      <div className=" w-screen h-screen d-flex relative z-10">
        <Banner isActive={activeSection} />
        <div className="h-screen overflow-auto w-1/2">
          <div ref={sectionRefs.experience} id="experience" className="my-40">
            <SectionExperience
              item="PENGALAMAN"
              isActive={activeSection === "experience"}
            />
          </div>
          <div ref={sectionRefs.skill} id="skill" className="my-80">
            <SectionSkill
              item="KEAHLIAN"
              isActive={activeSection === "skill"}
            />
          </div>
          <div ref={sectionRefs.project} id="project" className="my-32">
            <SectionProject
              item="PROJECT"
              isActive={activeSection === "project"}
            />
          </div>
          <div ref={sectionRefs.certificate} id="certificate" className="my-32">
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
