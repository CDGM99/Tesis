import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { Pen, PlusSquare, Trash } from "lucide-react";

import React from "react";
import Delete from "../components/Delete";
import {
  useDeleteOrdenesMutation,
  useGetOrdenesQuery,
} from "../services/OrdenesServices";
import { useLocation, useNavigate } from "react-router-dom";

const Ordenes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [
    deleteOrden,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeleteOrdenesMutation();
  const { data } = useGetOrdenesQuery(undefined, {
    refetchOnReconnect: true,
  });
  const dataOrdenesAlmacen = {
    columns: [
      {
        id: "number",
        accessorFn: (row) => row.number,
        cell: (info) => info.getValue(),
        header: "Numero de la orden",
        footer: (props) => props.column.id,
      },
      {
        id: "productos",
        accessorFn: (row) =>
          Array.isArray(row.productos)
            ? row.productos.map((producto) => producto.name).join(", ")
            : "",
        cell: (info) => info.getValue(),
        header: "Productos",
        footer: (props) => props.column.id,
      },
      {
        id: "total",
        accessorFn: (row) => row.total,
        cell: (info) => info.getValue(),
        header: "Pago total",
        footer: (props) => props.column.id,
      },
      {
        id: "Opciones",
        accessorFn: (row) => (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                navigate(`/dashboard/ordenes/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="Esta seguro que desea eliminar esta orden"
              action={() => deleteOrden(row.id)}
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
  const dataOrdenesEconomia = {
    columns: [
      {
        id: "number",
        accessorFn: (row) => row.number,
        cell: (info) => info.getValue(),
        header: "Numero de la orden",
        footer: (props) => props.column.id,
      },
      {
        id: "productos",
        accessorFn: (row) =>
          Array.isArray(row.productos)
            ? row.productos.map((producto) => producto.name).join(", ")
            : "",
        cell: (info) => info.getValue(),
        header: "Productos",
        footer: (props) => props.column.id,
      },
      {
        id: "total",
        accessorFn: (row) => row.total,
        cell: (info) => info.getValue(),
        header: "Pago total",
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
                {
                  location.pathname === "/dashboard/ordenes"
                    ? navigate(`/dashboard/ordenes/edit/${row.id}`)
                    : navigate(`/dashe/ordenes/edit/${row.id}`);
                }
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="Esta seguro que desea eliminar esta venta"
              action={() => deleteOrden(row.id)}
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
        {location.pathname === "/dashboard/ordenes" ? (
          <h1 className="text-center font-semibold text-[3rem] text-[#0280CA]">
            Ordenes
          </h1>
        ) : (
          <h1 className="text-center font-semibold text-[3rem] text-[#0280CA]">
            Ventas
          </h1>
        )}
        <Button
          variant="ghost"
          onClick={() => {
            {
              location.pathname === "/dashboard/ordenes"
                ? navigate(`/dashboard/ordenes/create`)
                : navigate(`/dashe/ordenes/create`);
            }
          }}
        >
          <PlusSquare size={40} color="#0280CA" />
        </Button>{" "}
      </div>
      <div className="flex">
        {location.pathname === "/dashboard/ordenes" ? (
          <Tabla data={dataOrdenesAlmacen} />
        ) : (
          <Tabla data={dataOrdenesEconomia} />
        )}
      </div>
    </div>
  );
};

export default Ordenes;
