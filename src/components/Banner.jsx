import CV from "../../public/assets/CV.pdf";
import Blob from "../../public/profile.png";
const Banner = () => {
  return (
    <div className="p-10">
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="">
          <h6 style={{ letterSpacing: "3px" }}>Hello!</h6>
          <h1 style={{ fontWeight: "bold" }}>
            I'm Muhamad Fajar Yudhistira Herjanto
          </h1>
          <h5 style={{ letterSpacing: "10px" }}>
            Frontend & Backend Developer
          </h5>{" "}
          <h6 style={{ letterSpacing: "2px" }} className="w-3/4 my-4">
            Merupakan Fresh Graduate Program Studi Informatika dari Universitas
            Singaperbangsa Karawang
          </h6>
          <div className="my-8 d-flex gap-2">
            <a
              className=" bg-blue-600 text-white text-lg font-semibold p-2 rounded-md  hover:bg-blue-700 "
              href="https://www.linkedin.com/in/muhamadfajaryh"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Visit my Linkedln
            </a>
            <a
              className=" bg-black  font-semibold p-2 rounded-md text-white shadow-sm text-lg "
              href={"https://github.com/Muhamadfajaryh12"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Visit my Github
            </a>
          </div>
        </div>

        <div className="relative m-2">
          <img src={Blob} className="w-80 p-4" />
          <div className="absolute top-0 left-0 border-t-8 border-l-8 border-blue-600 w-20 h-20"></div>
          <div className="absolute top-0 right-0 border-t-8 border-r-8 border-blue-600 w-20 h-20"></div>
          <div className="absolute bottom-0 right-0 border-b-8 border-r-8 border-blue-600 w-20 h-20"></div>
          <div className="absolute bottom-0 left-0 border-b-8 border-l-8 border-blue-600 w-20 h-20"></div>
        </div>
      </div>

      {/* <div className="">
        <ul className="fw-bold mt-10" style={{ letterSpacing: "3px" }}>
          <li
            className={`my-2 text-xl ${
              isActive == "experience" ? `opacity-100` : `opacity-50`
            }`}
          >
            PENGALAMAN
          </li>
          <li
            className={`my-2 text-xl ${
              isActive == "skill" ? `opacity-100` : `opacity-50`
            } `}
          >
            KEAHLIAN
          </li>
          <li
            className={`my-2 text-xl ${
              isActive == "project" ? `opacity-100` : `opacity-50`
            } `}
          >
            PROJECT
          </li>
          <li
            className={`my-2 text-xl ${
              isActive == "certificate" ? `opacity-100` : `opacity-50`
            } `}
          >
            SERTIFIKAT
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Banner;
