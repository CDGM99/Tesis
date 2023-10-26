import { useState, useEffect } from "react";
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
import { useGetGraficaProductosQuery } from "../services/GraficaProductos";

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
      text: "Ventas por productos",
    },
  },
};

const labels = [
  "Alimentos y Bebidas",
  "Aseo",
  "Combos Familiares",
  "Infantil",
  "Joyería y Bisutería",
  "Mascotas",
  "Muebles y Decoración",
  "Peletería",
  "Piezas de Carros",
  "Ropa",
  "Útiles del Hogar",
  "Útiles y Herramientas",
];

const TablaProductos = () => {
  const [values, setValues] = useState();
  const { data: producto_tipo } = useGetGraficaProductosQuery(undefined, {
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (producto_tipo) {
      // Inicializa un objeto para mapear tipos de productos a ventas
      const ventasPorTipo = labels.reduce((map, label) => {
        map[label] = 0;
        return map;
      }, {});

      // Calcula las ventas por tipo
      producto_tipo.forEach((item) => {
        item.tipo_productos.forEach((tipo) => {
          if (ventasPorTipo.hasOwnProperty(tipo)) {
            ventasPorTipo[tipo] += 1;
          }
        });
      });

      // Convierte el objeto a un arreglo en el orden de las etiquetas
      const dataArr = labels.map((label) => ventasPorTipo[label]);

      setValues(dataArr);
    }
  }, [producto_tipo]);

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
        <Bar options={options} data={data} />;
      </div>
    </div>
  );
};

export default TablaProductos;
