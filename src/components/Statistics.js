import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Missing Person and Found Person Distribution",
    },
  },
};

export default function Statistics() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/app/stats/data/table/`
        );
        const { missing_persons, found_persons } = response.data;

        const months = Array.from({ length: 12 }, (_, i) =>
          moment().month(i).format("MMMM").slice(0, 3)
        );
        const mp_array = Array.from({ length: 12 }, () => 0);
        missing_persons.forEach((dateString) => {
          const monthIndex = new Date(dateString).getMonth();
          mp_array[monthIndex]++;
        });

        const foundPersonCounts = Array.from({ length: 12 }, () => 0);
        found_persons.forEach((dateString) => {
          const monthIndex = new Date(dateString).getMonth();
          foundPersonCounts[monthIndex]++;
        });

        const data = {
          labels: months,
          datasets: [
            {
              label: "Missing Person",
              data: mp_array,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Found Persons",
              data: foundPersonCounts,
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        };

        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <>{chartData && <Bar options={options} data={chartData} />}</>;
}
