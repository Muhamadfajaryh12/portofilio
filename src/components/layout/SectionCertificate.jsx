import { useEffect } from "react";
import certificateData from "../../utils/certificate.json";

import Aos from "aos";

const SectionCertificate = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={`mt-10`}>
      <h5
        className="font-bold text-6xl text-gray-500  text-center"
        data-aos="zoom-in"
      >
        Certificate.
      </h5>

      {certificateData.map((item) => (
        <div
          className="border-blue-500 border-2 p-2 text-white rounded-md my-3  w-3/4 lg:w-1/2 mx-auto"
          key={item.name}
          data-aos="zoom-in"
        >
          <p className="m-0 p-0 opacity-70">{item.from}</p>
          <h6 className="font-bold opacity-70">{item.name}</h6>
        </div>
      ))}
    </div>
  );
};

export default SectionCertificate;
