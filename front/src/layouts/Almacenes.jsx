import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { Pen, PlusSquare, Trash } from "lucide-react";
import React from "react";
import Delete from "../components/Delete";
import {
  useDeleteAlmacenesMutation,
  useGetAlmacenesQuery,
} from "../services/AlmacenServices";
import { useNavigate } from "react-router-dom";

const Almacenes = () => {
  const navigate = useNavigate();

  const [
    deleteAlmacenes,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeleteAlmacenesMutation();

  const { data } = useGetAlmacenesQuery(undefined, {
    refetchOnReconnect: true,
  });

  const dataAlmacenes = {
    columns: [
      {
        id: "name",
        accessorFn: (row) => row.name,
        cell: (info) => info.getValue(),
        header: "Nombre",
        footer: (props) => props.column.id,
      },
      {
        id: "geolocalizacion",
        accessorFn: (row) => row.geolocalizacion,
        cell: (info) => info.getValue(),
        header: "Geolocalización",
        footer: (props) => props.column.id,
      },

      {
        id: "Opciones",
        accessorFn: (row) => (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                navigate(`/dashboard/almacenes/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="¿Esta seguro que desea eliminar este almacén?"
              action={() => deleteAlmacenes(row.id)}
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
          Almacenes
        </h1>
        <Button
          variant="ghost"
          onClick={() => {
            navigate(`/dashboard/almacenes/create`);
          }}
        >
          <PlusSquare size={40} color="#0280CA" />
        </Button>{" "}
      </div>
      <div className="flex">
        <Tabla data={dataAlmacenes} />
      </div>
    </div>
  );
};

export default Almacenes;
