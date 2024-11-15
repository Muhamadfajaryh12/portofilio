import { useEffect } from "react";
import DataSkill from "../../utils/skill.json";
import Aos from "aos";
const SectionSkill = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" mt-10">
      <h5
        className="font-bold text-6xl text-gray-500  text-center"
        data-aos="zoom-in"
      >
        Technology.
      </h5>
      <div className="flex flex-wrap justify-center w-3/4 mx-auto my-5">
        {DataSkill.map((item, index) => (
          <div key={index} data-aos="zoom-in">
            <div className=" w-24 m-2 border-2 border-blue-600 rounded-md shadow-xl text-white text-center font-bold p-2 ">
              <small
                style={{ fontWeight: "500" }}
                className="opacity-70 text-sm"
              >
                {item.nama}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSkill;
