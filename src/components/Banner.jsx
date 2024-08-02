import React from "react";

const Banner = () => {
  return (
    <div className="  text-white p-5">
      <h6 style={{ letterSpacing: "3px" }}>Hello!</h6>
      <h1 style={{ fontWeight: "bold" }}>
        I'm Muhamad Fajar Yudhistira Herjanto
      </h1>
      <h5 style={{ letterSpacing: "10px" }}>Frontend & Backend Developer</h5>
      <h6 style={{ letterSpacing: "3px", maxWidth: "690px" }}>
        I am a fresh graduate from the University of Singaperbangsa Karawang
        informatics study program. I have internship and independent study
        experience.
      </h6>
      <div className="">
        <ul className="fw-bold opacity-50">
          <li className="opacity-100">PENGALAMAN</li>
          <li>KEAHLIAN</li>
          <li>PROJECT</li>
          <li>SERTIFIKAT</li>
        </ul>
      </div>
      <button className="btn bg-white">DOWNLOAD CV</button>
    </div>
  );
};

export default Banner;
