import React from "react";
import MainLayout from "../components/layout/MainLayout";
import DataSkill from "../utils/skill.json";
import dataExperience from "../utils/experience.json";
import dataEducation from "../utils/education.json";
const AboutPage = () => {
  return (
    <MainLayout>
      <div className="bg-white p-4 rounded-md">
        <h4 className="font-bold tracking-widest uppercase">Profile</h4>
        <p>
          Muhamad Fajar Yudhistira Herjanto adalah Web Developer lulusan
          Informatika Universitas Singaperbangsa Karawang. Memiliki pengalaman
          di bidang pengembangan web melalui Magang, Studi Independen Kampus
          Merdeka dan kompetisi teknologi, saya berfokus pada pembuatan aplikasi
          yang fungsional, efisien, dan inovatif.
        </p>
        <div className="grid grid-cols-2">
          <div>
            <h5 className="m-0 p-0 font-bold">Pendidikan</h5>
            {dataEducation.map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <h6 className="font-bold m-0 p-0">{index + 1}</h6>
                <div>
                  <div className="flex items-center gap-2 ">
                    <h6 className="m-0 p-0">{item.nama}</h6> |{" "}
                    <h6 className="m-0 p-0">{item.jurusan}</h6>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <h6 className="m-0 p-0">{item.tahun}</h6> |{" "}
                    <h6 className="m-0 p-0">{item.nilai}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h5 className="m-0 p-0 font-bold">Pengalaman</h5>
            {dataExperience.map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <h6 className="font-bold m-0 p-0">{index + 1}</h6>
                <div>
                  <div className="flex items-center gap-2 ">
                    <h6 className="m-0 p-0">{item.name}</h6> |{" "}
                    <h6 className="m-0 p-0">{item.level}</h6>
                  </div>
                  <p className="m-0 p-0">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h5 className="m-0 p-0 font-bold">Teknologi yang digunakan</h5>
        <marquee>
          <div className="flex gap-2">
            {DataSkill.filter((item, index) => index % 2 == 0).map(
              (item, index) => (
                <div
                  key={index}
                  className={`p-2  text-center font-bold text-white text-xs uppercase tracking-widest bg-gray-400 rounded-sm 
               
                `}
                >
                  {item.nama}
                </div>
              )
            )}
          </div>
        </marquee>{" "}
        <marquee direction="right">
          <div className="flex gap-2">
            {DataSkill.filter((item, index) => index % 2 != 0).map(
              (item, index) => (
                <div
                  key={index}
                  className={`p-2  text-center font-bold text-white text-xs uppercase tracking-widest bg-gray-400 rounded-sm 
               
                `}
                >
                  {item.nama}
                </div>
              )
            )}
          </div>
        </marquee>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
