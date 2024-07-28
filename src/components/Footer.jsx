import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { CiWifiOff, CiWifiOn } from "react-icons/ci";

const Footer = (props) => {
  const { data, setModalShow, active, setUniqueId, handleContent } = props;
  const [battery, setBattery] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const openModal = (data) => {
    setModalShow({ ...data, uniqueId: data.uniqueId, title: data.nama });
    setUniqueId(data.uniqueId);
    handleContent(data.nama);
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
    <div style={{ position: "absolute", width: "100%", bottom: "0" }}>
      <div className="text-center bg-dark text-white p-2 fw-semibold d-flex justify-content-between">
        <div className="d-flex align-items-center gap-1">
          {data.map((item) => (
            <button
              key={item.id}
              className={`d-flex gap-1 justify-content-evenly align-items-center  border-0 text-white ${
                active ? "bg-dark  border-0" : "bg-transparent"
              }`}
              onClick={() => openModal(item)}
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
            style={{ width: "30px", height: "10px", fontSize: "8px" }}
            label={`${battery}%`}
          />
          <div className="text-white">
            {isOnline ? <CiWifiOn className="text-white" /> : <CiWifiOff />}
          </div>
          <div className="d-flex flex-column">
            <small style={{ fontSize: "12px" }}>{getCurrentTime}</small>
            <small style={{ fontSize: "12px" }}>{formattedDate}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
