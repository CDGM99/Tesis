import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { Pen, PlusSquare, Trash } from "lucide-react";

import React from "react";
import Delete from "../components/Delete";
import {
  useDeletePagoeMutation,
  useGetPagoeQuery,
} from "../services/PagoEServices";
import { useNavigate } from "react-router-dom";

const PagoE = () => {
  const navigate = useNavigate();

  const [
    deletePagoe,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeletePagoeMutation();

  const { data } = useGetPagoeQuery(undefined, {
    refetchOnReconnect: true,
  });
  const dataPagoe = {
    columns: [
      {
        id: "nombre",
        accessorFn: (row) => row.name,
        cell: (info) => info.getValue(),
        header: "Nombre",
        footer: (props) => props.column.id,
      },
      {
        id: "refered_number",
        accessorFn: (row) => row.refered_number,
        cell: (info) => info.getValue(),
        header: "Código",
        footer: (props) => props.column.id,
      },
      {
        id: "retribution_for_sales",
        accessorFn: (row) => row.retribution_for_sales,
        cell: (info) => `$${info.getValue()}`,
        header: "Pago por ventas",
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
                navigate(`/dashe/pagoe/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="¿Esta seguro que desea eliminar este embajador?"
              action={() => deletePagoe(row.id)}
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
          Pago a Embajadores
        </h1>
        <Button
          variant="ghost"
          onClick={() => {
            navigate(`/dashe/pagoe/create`);
          }}
        >
          <PlusSquare size={40} color="#0280CA" />
        </Button>{" "}
      </div>
      <div className="flex">
        <Tabla data={dataPagoe} />
      </div>
    </div>
  );
};

export default PagoE;
