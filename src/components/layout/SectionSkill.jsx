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
            <div className=" w-32 m-2 rounded-md shadow-md text-white text-center font-bold p-3 ">
              <small
                style={{ fontWeight: "500" }}
                className="text-gray-500 text-lg"
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
