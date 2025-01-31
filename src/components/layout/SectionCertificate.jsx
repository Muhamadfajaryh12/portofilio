import { useEffect, useRef } from "react";
import certificateData from "../../utils/certificate.json";
import { FaCertificate } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SectionCertificate = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (direction == "left") {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-gray-900 rounded-lg mt-10 p-2">
      <div className="text-white text-center my-4">
        <h1 className="text-3xl">Sertifikasi.</h1>
        <p className="text-sm">
          Sertifikat yang saya miliki dari course yang telah saya ikuti.
        </p>
      </div>
      <div className="relative">
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-40 cursor-pointer "
          onClick={() => handleScroll("left")}
        >
          <IoIosArrowBack size={30} className="text-cyan-400" />
        </button>

        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-40 cursor-pointer  "
          onClick={() => handleScroll("right")}
        >
          <IoIosArrowForward size={30} className="text-cyan-400" />
        </button>

        <div
          className="flex overflow-x-scroll scroll-smooth w-full z-0 scrollbar-hidden"
          ref={scrollContainerRef}
        >
          {certificateData.map((item) => (
            <div
              className=" flex-shrink-0  w-64 h-72  border-l"
              key={item.name}
            >
              <div className="bg-blue-900 h-full w-0  absolute -z-0 group-hover:w-full transition-all ease-in-out duration-700 rounded-md "></div>
              <div className="p-2 relative z-30">
                <div className="rounded-full w-20 h-20 mx-auto  flex justify-center items-center relative shadow-md z-10 bg-white">
                  <FaCertificate size={30} className="text-white" />
                </div>
                <p className=" font-bold text-md text-center mt-4 text-white">
                  {item.from}
                </p>
                <h6 className="  text-sm text-center text-white">
                  {item.name}
                </h6>
              </div>
              <div className="flex justify-center">
                <Link
                  to={`${item.pdf}`}
                  target="_blank"
                  className="p-2 text-decoration-none text-sm rounded-md text-center  bottom-5 font-semibold text-white border-2  border-cyan-400"
                >
                  Certificate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionCertificate;
