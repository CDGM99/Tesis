import { Tabla } from "../components/Tabla";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteSalidaseMutation,
  useGetSalidaseQuery,
} from "../services/SalidaseServices";
import Delete from "../components/Delete";
import { Button } from "../components/ui/button";
import { Pen, Trash } from "lucide-react";

const Salidase = () => {
  const navigate = useNavigate();

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
        cell: (info) => `$${info.getValue()}`,
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
      {
        id: "Opciones",
        accessorFn: (row) => (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                navigate(`/dashboard/salidase/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.producto.name}`}
              message="¿Esta seguro que desea eliminar esta salida especial?"
              action={() => deletePagop(row.id)}
            >
              <Button variant={"ghost"} size={"icon"}>
                <Trash size={15} />
              </Button>
            </Delete>
          </div>
        ),
        cell: (info) => info.getValue(),
        header: "Opciones",
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
