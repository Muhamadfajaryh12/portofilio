import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import data from "../../utils/project.json";
import Aos from "aos";
const SectionProject = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data.slice(0, 6));
    Aos.init();
  }, []);
  const handleViewMore = () => {
    setDatas(data.slice(0, datas.length + 3));
  };
  const handleViewLess = () => {
    if (datas.length > 7) {
      setDatas(data.slice(0, datas.length - 3));
    }
  };

  return (
    <div className="p-10 ">
      <h5
        className="font-bold text-xl  text-gray-500 mt-24  text-center"
        data-aos="zoom-in"
      >
        Project.
      </h5>{" "}
      <div className="grid md:grid-cols-2  sm:grid-cols-1 xl:grid-cols-3 lg:mx-24  my-20">
        {datas.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            image={item.image}
            tech={item.tech}
            category={item.category}
            link={item?.link}
          />
        ))}
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        <button
          className=" text-lg font-bold text-white p-2 w-46 bg-gradient-to-r from-red-600 to-red-400 "
          style={{ letterSpacing: "2px" }}
          onClick={handleViewLess}
        >
          View Less
        </button>

        <button
          className=" text-lg font-bold text-white p-2 w-46 bg-gradient-to-r from-red-500 to-red-400 "
          style={{ letterSpacing: "2px" }}
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SectionProject;
