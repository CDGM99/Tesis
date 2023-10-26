import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { Pen, PlusSquare, Trash } from "lucide-react";

import React from "react";
import Delete from "../components/Delete";
import {
  useDeletePagopMutation,
  useGetPagopQuery,
} from "../services/PagoPServices";
import { useNavigate } from "react-router-dom";

const PagoP = () => {
  const navigate = useNavigate();
  const [
    deletePagop,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeletePagopMutation();

  const { data } = useGetPagopQuery(undefined, {
    refetchOnReconnect: true,
  });
  const dataPagop = {
    columns: [
      {
        id: "nombre",
        accessorFn: (row) => row.name,
        cell: (info) => info.getValue(),
        header: "Nombre",
        footer: (props) => props.column.id,
      },
      {
        id: "code",
        accessorFn: (row) => row.code,
        cell: (info) => info.getValue(),
        header: "Código",
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
                navigate(`/dashe/pagop/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="¿Esta seguro que desea eliminar este proveedor?"
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
          Pago a Proveedores
        </h1>
        <Button
          variant="ghost"
          onClick={() => {
            navigate(`/dashe/pagop/create`);
          }}
        >
          <PlusSquare size={40} color="#0280CA" />
        </Button>{" "}
      </div>
      <div className="flex">
        <Tabla data={dataPagop} />
      </div>
    </div>
  );
};

export default PagoP;
