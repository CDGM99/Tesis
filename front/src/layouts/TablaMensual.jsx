import React from "react";
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
      text: "Ventas mensuales",
    },
  },
};

export const op = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ventas por productos",
    },
  },
};

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Cantidad de ventas",
      data: [12, 19, 3, 5, 2, 3, 20, 15, 10, 12, 3, 19],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const TablaMensual = () => {
  return <Bar options={options} data={data} />;
};

export default TablaMensual;
