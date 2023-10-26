import React, { useState, useEffect } from "react";
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
import { useGetGraficaVentasQuery } from "../services/GraficaVentas";

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

const TablaMensual = () => {
  const [values, setValues] = useState();
  const { data: orden_mes } = useGetGraficaVentasQuery(undefined, {
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (orden_mes) {
      const ordenMesMap = orden_mes.reduce((acc, item) => {
        const date = new Date(item.mes);
        const month = date.getMonth() + 1;
        acc[month] = item.total_ordenes;
        console.log(month);

        return acc;
      }, {});

      const dataMes = Array.from({ length: 12 }, (_, i) => ordenMesMap[i] || 0);
      setValues(dataMes);
    }
  }, [orden_mes]);

  const data = {
    labels,
    datasets: [
      {
        label: "Cantidad de ventas",
        data: values,
        backgroundColor: "rgba(2, 128, 202, 0.8)",
      },
    ],
  };

  return (
    <div className="flex py-48 h-full w-full justify-center items-center">
      <div className="p-4 w-1/2 flex ">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default TablaMensual;
