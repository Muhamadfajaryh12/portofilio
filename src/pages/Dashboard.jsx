import MainLayout from "../components/layout/MainLayout";
import GitHubCalendar from "react-github-calendar";
import CardCommon from "../components/CardCommon";
import { MdWork } from "react-icons/md";
import dataProject from "../utils/project.json";
import dataSertifikasi from "../utils/certificate.json";
import dataPengalaman from "../utils/experience.json";
import ChartBar from "../components/ChartBar";
const Dashboard = () => {
  const dataBarProject = {
    labels: ["Kampus Merdeka Project", "Internship Project", "Dummy Project"],
    datasets: [
      {
        label: ["Jumlah Project"],
        data: [
          dataProject.filter(
            (item) => item.category === "Kampus Merdeka Project"
          ).length,
          dataProject.filter((item) => item.category === "Internship Project")
            .length,
          dataProject.filter((item) => item.category === "Dummy Project")
            .length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };
  const dataBarRole = {
    labels: ["Fullstack", "Frontend", "Backend"],
    datasets: [
      {
        label: ["Jumlah Project"],
        data: [
          dataProject.filter((item) => item.role === "Fullstack").length,
          dataProject.filter((item) => item.role === "Frontend").length,
          dataProject.filter((item) => item.role === "Backend").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  };
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <CardCommon
          title={"Project"}
          number={dataProject.length}
          icon={<MdWork className="text-blue-500" size={20} />}
          style={"bg-blue-100"}
        />
        <CardCommon
          title={"Pengalaman"}
          number={dataPengalaman.length}
          icon={<MdWork className="text-violet-500" size={20} />}
          style={"bg-violet-100"}
        />
        <CardCommon
          title={"Sertifikasi"}
          number={dataSertifikasi.length}
          icon={<MdWork className="text-red-500" size={20} />}
          style={"bg-red-100"}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="bg-white p-2 rounded-md shadow-sm">
          <ChartBar title={"Grafik Project"} data={dataBarProject} />
        </div>{" "}
        <div className="bg-white p-2 rounded-md shadow-sm">
          <ChartBar title={"Grafik Project"} data={dataBarRole} />
        </div>
      </div>
      <div className="bg-white p-2 w-auto">
        <h1 className="font-bold text-lg">Aktifitas Github</h1>
        <GitHubCalendar username="Muhamadfajaryh12" />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
