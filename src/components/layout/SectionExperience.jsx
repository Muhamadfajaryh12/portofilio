import React from "react";

const data = [
  {
    year: "2022",
    month: "Aug",
    activity: "Study Independent",
  },
  {
    year: "2022",
    month: "Sep",
    activity: "Study Independent",
  },
  {
    year: "2022",
    month: "Oct",
    activity: "Study Independent",
  },
  {
    year: "2022",
    month: "Nov",
    activity: "Study Independent",
  },
  {
    year: "2022",
    month: "Dec",
    activity: "Study Independent",
  },
  {
    year: "2023",
    month: "Jan",
    activity: "Study Independent",
  },
  {
    year: "2023",
    month: "Apr",
    activity: "Competition Semantics",
  },
  {
    year: "2023",
    month: "Aug",
    activity: "Study Independent & Internship",
  },
  {
    year: "2023",
    month: "Sep",
    activity: "Study Independent & Internship",
  },
  {
    year: "2023",
    month: "Oct",
    activity: "Study Independent & Internship",
  },
  {
    year: "2023",
    month: "Nov",
    activity: "Study Independent",
  },
  {
    year: "2023",
    month: "Dec",
    activity: "Study Independent",
  },
  {
    year: "2024",
    month: "Jan",
    activity: "Study Independent",
  },
  {
    year: "2024",
    month: "Feb",
    activity: "Internship",
  },
  {
    year: "2024",
    month: "Mar",
    activity: "Internship",
  },
  {
    year: "2024",
    month: "Apr",
    activity: "Internship",
  },
  {
    year: "2024",
    month: "May",
    activity: "Internship",
  },
  {
    year: "2024",
    month: "Jun",
    activity: "Internship",
  },
  {
    year: "2024",
    month: "Jul",
    activity: "Internship",
  },
];

const SectionExperience = () => {
  const groupedData = {};
  data.forEach((item) => {
    if (!groupedData[item.year]) {
      groupedData[item.year] = [];
    }
    groupedData[item.year].push({ month: item.month, activity: item.activity });
  });

  return (
    <div className="bg-dark p-5" id="experience">
      <h2
        className="text-white text-center fw-bold"
        style={{ letterSpacing: "3px" }}
      >
        - EXPERIENCE -
      </h2>
      <div style={{ maxWidth: "1200px", overflow: "auto" }}>
        <table className="table bg-transparent border-secondary table-bordered text-center">
          <thead>
            <tr>
              <th className="bg-transparent text-white">Timeline</th>
              <th className="bg-transparent text-white">Jan</th>
              <th className="bg-transparent text-white">Feb</th>
              <th className="bg-transparent text-white">Mar</th>
              <th className="bg-transparent text-white">Apr</th>
              <th className="bg-transparent text-white">May</th>
              <th className="bg-transparent text-white">Jun</th>
              <th className="bg-transparent text-white">Jul</th>
              <th className="bg-transparent text-white">Aug</th>
              <th className="bg-transparent text-white">Sep</th>
              <th className="bg-transparent text-white">Oct</th>
              <th className="bg-transparent text-white">Nov</th>
              <th className="bg-transparent text-white">Dec</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedData).map((year) => (
              <tr key={year}>
                <td className="bg-transparent text-white">{year}</td>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <td
                    key={`${year}-${month}`}
                    className="bg-transparent text-white"
                  >
                    {groupedData[year].find((item) => item.month === month) ? (
                      <button className=" btn btn-sm  ">
                        <span
                          className={`badge ${
                            groupedData[year].find(
                              (item) => item.month === month
                            ).activity == "Internship"
                              ? "bg-success"
                              : groupedData[year].find(
                                  (item) => item.month === month
                                ).activity == "Study Independent"
                              ? "bg-primary"
                              : "bg-danger"
                          }`}
                          style={{ width: "10px !important;" }}
                        >
                          {
                            groupedData[year].find(
                              (item) => item.month === month
                            ).activity
                          }
                        </span>
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionExperience;
