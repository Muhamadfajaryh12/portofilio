import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Footer = (props) => {
  const { data, setModalShow } = props;
  const [battery, setBattery] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const openModal = () => {
    setModalShow(true);
  };
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const getCurrentTime = `${date.getHours()}:${date.getMinutes()}`;

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      let level = battery.level * 100;
      setBattery(level);
    });
  }, []);

  return (
    <div className="text-center bg-dark text-white p-2 fw-semibold d-flex justify-content-between">
      <div className="d-flex align-items-center gap-1">
        {data.map((item) => (
          <button
            key={item.id}
            className="d-flex gap-1 justify-content-evenly align-items-center bg-transparent border-0 text-white"
            onClick={openModal}
          >
            <img src={item.image} alt="" style={{ width: "20px" }} />
            <small>{item.nama}</small>
          </button>
        ))}
      </div>
      <div className="d-flex justify-content-end align-items-center gap-2">
        <ProgressBar
          variant="success"
          now={battery}
          style={{ width: "50px" }}
          label={`${battery}%`}
        />
        <div className="">{isOnline ? "online" : "offline"}</div>
        <div className="d-flex flex-column">
          <small style={{ fontSize: "12px" }}>{getCurrentTime}</small>
          <small style={{ fontSize: "12px" }}>{formattedDate}</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
