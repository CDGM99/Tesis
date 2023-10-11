import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { Pen, PlusSquare, Trash } from "lucide-react";

import React from "react";
import Delete from "../components/Delete";
import {
  useDeleteFacturasiMutation,
  useGetFacturasiQuery,
} from "../services/FacturasIServices";
import { useNavigate } from "react-router-dom";

const Facturasi = () => {
  const navigate = useNavigate();
  const [
    deleteFacturasi,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeleteFacturasiMutation();

  const { data } = useGetFacturasiQuery(undefined, {
    refetchOnReconnect: true,
  });

  const dataFacturasi = {
    columns: [
      {
        id: "productos",
        accessorFn: (row) =>
          Array.isArray(row.producto)
            ? row.producto.map((producto) => producto.name).join(", ")
            : "",
        cell: (info) => info.getValue(),
        header: "Productos",
        footer: (props) => props.column.id,
      },
      {
        id: "worker_in_charge",
        accessorFn: (row) => row.worker_in_charge,
        cell: (info) => info.getValue(),
        header: "Trabajador a cargo",
        footer: (props) => props.column.id,
      },
      {
        id: "cost",
        accessorFn: (row) => row.cost,
        cell: (info) => info.getValue(),
        header: "Costo",
        footer: (props) => props.column.id,
      },
      {
        id: "description",
        accessorFn: (row) => row.description,
        cell: (info) => info.getValue(),
        header: "Descripción",
        footer: (props) => props.column.id,
      },
      {
        id: "paid",
        accessorFn: (row) => row.paid,
        cell: (info) => (info.getValue() ? "Pagado" : "No Pagado"),
        header: "Pagado",
        footer: (props) => props.column.id,
      },

      {
        id: "Opciones",
        accessorFn: (row) => (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                navigate(`/dashe/facturasi/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="¿Esta seguro que desea eliminar esta factura interna?"
              action={() => deleteFacturasi(row.id)}
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
          Facturas Internas
        </h1>
        <Button
          variant="ghost"
          onClick={() => {
            navigate(`/dashe/facturasi/create`);
          }}
        >
          <PlusSquare size={40} color="#0280CA" />
        </Button>{" "}
      </div>
      <div className="flex">
        <Tabla data={dataFacturasi} />
      </div>
    </div>
  );
};

export default Facturasi;
