import React, { useEffect, useState } from "react";
import Logo from "../assets/windows.png";
const LoadingPage = () => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading >= 100) {
          clearInterval(intervalId);
          return prevLoading;
        }
        return prevLoading + 1;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center">
        <img src={Logo} alt="" style={{ width: "200px", marginTop: "50px" }} />
      </div>
      {loading != 100 ? (
        <div className="text-center" style={{ marginTop: "200px" }}>
          <h6>Please Wait ...</h6>
          <p>{loading} % </p>
        </div>
      ) : (
        <div className="text-center" style={{ marginTop: "200px" }}>
          <h6>Welcome</h6>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
