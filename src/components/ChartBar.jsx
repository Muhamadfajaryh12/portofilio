import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const ChartBar = ({ data, title }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartBar;
