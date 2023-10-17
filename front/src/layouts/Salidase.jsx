import { Tabla } from "../components/Tabla";
// import { Button } from "../components/ui/button";
// import { Pen, PlusSquare, Trash } from "lucide-react";
import React from "react";
// import Delete from "../components/Delete";
import { useNavigate } from "react-router-dom";
import {
  useDeleteSalidaseMutation,
  useGetSalidaseQuery,
} from "../services/SalidaseServices";
const Salidase = () => {
  const { data } = useGetSalidaseQuery(undefined, {
    refetchOnReconnect: true,
  });

  const dataSalidase = {
    columns: [
      {
        id: "productoname",
        accessorFn: (row) => row.producto.name,
        cell: (info) => info.getValue(),
        header: "Nombre del producto",
        footer: (props) => props.column.id,
      },
      {
        id: "output_description",
        accessorFn: (row) => row.output_description,
        cell: (info) => info.getValue(),
        header: "Descripción",
        footer: (props) => props.column.id,
      },
      {
        id: "output_type",
        accessorFn: (row) => row.output_type,
        cell: (info) => info.getValue(),
        header: "Tipo de salida",
        footer: (props) => props.column.id,
      },
      {
        id: "productosku",
        accessorFn: (row) => row.producto.sku,
        cell: (info) => info.getValue(),
        header: "SKU",
        footer: (props) => props.column.id,
      },
      {
        id: "productocost",
        accessorFn: (row) => row.producto.cost,
        cell: (info) => info.getValue(),
        header: "Costo",
        footer: (props) => props.column.id,
      },
      {
        id: "productoproduct_id",
        accessorFn: (row) => row.producto.product_id,
        cell: (info) => info.getValue(),
        header: "ID",
        footer: (props) => props.column.id,
      },
    ],
    rows: data ?? [],
  };
  return (
    <div className="flex flex-col p-10">
      <div>
        <h1 className="text-center font-semibold text-[3rem] text-[#0280CA]">
          Salidas especiales
        </h1>
      </div>
      <div className="flex">
        <Tabla data={dataSalidase} />
      </div>
    </div>
  );
};

export default Salidase;
