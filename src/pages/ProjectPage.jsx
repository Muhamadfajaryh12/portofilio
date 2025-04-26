import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import DataProjectWeb from "../utils/project.json";
import DataProjectMobile from "../utils/projectMobile.json";
const ProjectPage = () => {
  const [website, setWebsite] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(DataProjectWeb);
  }, []);
  const handleChange = (e) => {
    if (e) {
      setData(DataProjectWeb.filter((item) => item.category == e));
    } else {
      setData(DataProjectWeb);
    }
  };

  return (
    <MainLayout>
      <div className="bg-white rounded-md p-4">
        <h4 className="font-bold tracking-widest uppercase">PROJECT</h4>

        <div className="flex justify-between my-2">
          <div className="flex gap-3">
            <button
              className={`tracking-widest uppercase  p-2 rounded-md text-xs ${
                website ? "bg-gray-700 text-white font-bold" : ""
              }`}
              onClick={() => setWebsite(true)}
            >
              website
            </button>
            <button
              className={`tracking-widest uppercase  p-2 rounded-md text-xs ${
                !website ? "bg-gray-700 text-white font-bold" : ""
              }`}
              onClick={() => setWebsite(false)}
            >
              mobile
            </button>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="">Filter Kategori</option>
              <option value="Internship Project">Internship Project</option>
              <option value="Kampus Merdeka Project">
                Kampus Merdeka Project
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {website
            ? data.map((item, index) => (
                <div key={index}>
                  <img src={item.image} className="rounded-md border" />
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tech.map((tech, index) => (
                      <div
                        className="text-xs uppercase  bg-gray-200 font-semibold  p-2 rounded-md mt-1"
                        key={index}
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : DataProjectMobile.map((item, index) => (
                <div key={index}>
                  <img src={item.image} className="rounded-md  h-64" />
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tech.map((tech, index) => (
                      <div
                        className="text-xs uppercase  bg-gray-200 font-semibold  p-1 rounded-sm mt-1"
                        key={index}
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectPage;
