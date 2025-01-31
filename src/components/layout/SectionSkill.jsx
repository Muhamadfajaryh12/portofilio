import { useEffect } from "react";
import DataSkill from "../../utils/skill.json";
import Aos from "aos";
const SectionSkill = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" mt-10 flex justify-center">
      <div>
        <h5 className="font-bold text-3xl text-white  text-center">
          Keahlian.
        </h5>
        <div className="w-1/3 my-4 h-2 rounded-full bg-cyan-400"></div>

        <p className="text-white text-sm">
          Framework dan pemrograman yang telah saya gunakan
        </p>
      </div>{" "}
      <div className="flex flex-wrap justify-center w-3/4 mx-auto">
        {DataSkill.map((item, index) => (
          <div key={index} data-aos="zoom-in">
            <div className=" w-32 m-2 rounded-md shadow-md text-white text-center font-bold p-3 border-2 border-cyan-400 ">
              <small
                style={{ fontWeight: "500" }}
                className="text-white text-md"
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
