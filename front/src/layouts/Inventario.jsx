import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { GanttChartSquare, Pen, PlusSquare, Trash } from "lucide-react";
import React from "react";
import {
  useDeleteProductosMutation,
  useDeleteTochoMutation,
  useGetProductosQuery,
} from "../services/InventarioServices";
import { useNavigate } from "react-router-dom";
import DeleteInventario from "../components/DeleteInventario";
import Details from "../components/Details";
import useUser from "../hooks/user";

const Inventario = () => {
  const navigate = useNavigate();
  const [user] = useUser();

  const [
    deleteProductos,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeleteTochoMutation();

  const { data } = useGetProductosQuery(undefined, {
    refetchOnReconnect: true,
  });

  const dataProductosNegocio = {
    columns: [
      {
        id: "nombre",
        accessorFn: (row) => row.name,
        cell: (info) => info.getValue(),
        header: "Nombre",
        footer: (props) => props.column.id,
      },
      {
        id: "sku",
        accessorFn: (row) => row.sku,
        cell: (info) => info.getValue(),
        header: "SKU",
        footer: (props) => props.column.id,
      },
      {
        id: "stock_quantity",
        accessorFn: (row) => row.stock_quantity,
        cell: (info) => info.getValue(),
        header: "Cantidad en inventario",
        footer: (props) => props.column.id,
      },
      {
        id: "brand",
        accessorFn: (row) => row.brand,
        cell: (info) => info.getValue(),
        header: "Marca",
        footer: (props) => props.column.id,
      },
      {
        id: "type",
        accessorFn: (row) => row.type,
        cell: (info) => info.getValue(),
        header: "Tipo",
        footer: (props) => props.column.id,
      },
      {
        id: "product_id",
        accessorFn: (row) => row.product_id,
        cell: (info) => info.getValue(),
        header: "ID del producto",
        footer: (props) => props.column.id,
      },
    ],
    rows: data ?? [],
  };
  const dataProductosAdmin = {
    columns: [
      {
        id: "nombre",
        accessorFn: (row) => row.name,
        cell: (info) => info.getValue(),
        header: "Nombre",
        footer: (props) => props.column.id,
      },
      {
        id: "sku",
        accessorFn: (row) => row.sku,
        cell: (info) => info.getValue(),
        header: "SKU",
        footer: (props) => props.column.id,
      },
      {
        id: "stock_quantity",
        accessorFn: (row) => row.stock_quantity,
        cell: (info) => info.getValue(),
        header: "Cantidad en inventario",
        footer: (props) => props.column.id,
      },
      {
        id: "brand",
        accessorFn: (row) => row.brand,
        cell: (info) => info.getValue(),
        header: "Marca",
        footer: (props) => props.column.id,
      },
      {
        id: "type",
        accessorFn: (row) => row.type,
        cell: (info) => info.getValue(),
        header: "Tipo",
        footer: (props) => props.column.id,
      },
      {
        id: "product_id",
        accessorFn: (row) => row.product_id,
        cell: (info) => info.getValue(),
        header: "ID del producto",
        footer: (props) => props.column.id,
      },
      {
        id: "Opciones",
        accessorFn: (row) => (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                navigate(`/dashboard/inventario/edit/${row.id}`);
              }}
            >
              <Pen size={15} />
            </Button>{" "}
            <Details
              title={`Información del producto ${row.name}`}
              message="Aqui se mostrará la informacion detallada del producto"
              id={row.id}
            >
              <Button variant="ghost">
                <GanttChartSquare size={15} />
              </Button>
            </Details>
            <DeleteInventario
              title={`Borrar ${row.name}`}
              message="¿Por que desea eliminar este producto del inventario?"
              id={row.id}
              action={(data) => deleteProductos(data)}
            >
              <Button variant={"ghost"} size={"icon"}>
                <Trash size={15} />
              </Button>
            </DeleteInventario>
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
          Inventario
        </h1>
        {user.groups[0] === 4 ? (
          ""
        ) : (
          <Button
            variant="ghost"
            onClick={() => {
              navigate(`/dashboard/inventario/create`);
            }}
          >
            <PlusSquare size={40} color="#0280CA" />
          </Button>
        )}
      </div>
      <div className="flex">
        {user.groups[0] === 4 ? (
          <Tabla data={dataProductosNegocio} />
        ) : (
          <Tabla data={dataProductosAdmin} />
        )}
      </div>
    </div>
  );
};

export default Inventario;
