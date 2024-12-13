import React from "react";
import SectionExperience from "../components/layout/SectionExperience";
import SectionSkill from "../components/layout/SectionSkill";
import SectionCertificate from "../components/layout/SectionCertificate";
import BannerEducation from "../components/BannerEducation";

const AboutPage = () => {
  return (
    <div className=" w-full p-10 bg-gray-50">
      <BannerEducation />
      <SectionExperience />
      <SectionSkill />
      <SectionCertificate />
    </div>
  );
};

export default AboutPage;
