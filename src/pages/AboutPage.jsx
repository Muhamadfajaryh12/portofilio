import React from "react";
import SectionExperience from "../components/layout/SectionExperience";
import SectionSkill from "../components/layout/SectionSkill";
import SectionCertificate from "../components/layout/SectionCertificate";

const AboutPage = () => {
  return (
    <div className=" w-full p-10">
      <SectionExperience />
      <SectionSkill />
      <SectionCertificate />
    </div>
  );
};

export default AboutPage;
