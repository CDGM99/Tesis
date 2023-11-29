import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { ArrowBigLeft, Pen, PlusSquare, Reply, Trash } from "lucide-react";

import React from "react";
import Delete from "../components/Delete";
import {
  useDeleteUsuariosMutation,
  useGetUsuariosQuery,
} from "../services/Usuarios";
import { useNavigate } from "react-router-dom";

const Usuarios = () => {
  const navigate = useNavigate();
  const [
    deleteUsuarios,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeleteUsuariosMutation();

  const { data } = useGetUsuariosQuery(undefined, {
    refetchOnReconnect: true,
  });
  const dataUsuarios = {
    columns: [
      {
        id: "nombre",
        accessorFn: (row) => row.name,
        cell: (info) => info.getValue(),
        header: "Nombre",
        footer: (props) => props.column.id,
      },
      {
        id: "apellidos",
        accessorFn: (row) => row.apellidos,
        cell: (info) => info.getValue(),
        header: "Apellidos",
        footer: (props) => props.column.id,
      },
      {
        id: "email",
        accessorFn: (row) => row.email,
        cell: (info) => info.getValue(),
        header: "Correo electrónico",
        footer: (props) => props.column.id,
      },
      {
        id: "groups",
        accessorFn: (row) => row.groups,
        cell: (info) => {
          const value = info.getValue();
          console.log(value);
          if (value == "1") {
            return "Administración";
          } else if (value == "2") {
            return "Almacén";
          } else if (value == "3") {
            return "Economía";
          } else if (value == "4") {
            return "Negocios";
          }
          return "Desconocido";
        },
        header: "Especialización",
        footer: (props) => props.column.id,
      },
      {
        id: "Opciones",
        accessorFn: (row) => (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                navigate(`/usuarios/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar a ${row.name}`}
              message="¿Esta seguro que desea eliminar este usuario?"
              action={() => deleteUsuarios(row.id)}
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
      <div className="flex justify-between">
        <div className="content-start">
          <img src="/CBM_1.png" alt="hello" className=" h-[30px]" />
        </div>
        <div className="content-end">
          <Button
            variant="ghost"
            onClick={() => {
              navigate(`/inicio`);
            }}
          >
            <Reply size={40} color="#0280CA" />
          </Button>{" "}
        </div>
      </div>
      <div>
        <h1 className="text-center font-semibold text-[3rem] text-[#0280CA]">
          Usuarios
        </h1>
        <Button
          variant="ghost"
          onClick={() => {
            navigate(`/usuarios/create`);
          }}
        >
          <PlusSquare size={40} color="#0280CA" />
        </Button>{" "}
      </div>
      <div className="flex">
        <Tabla data={dataUsuarios} />
      </div>
    </div>
  );
};

export default Usuarios;
