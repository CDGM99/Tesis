import { Tabla } from "../components/Tabla";
import { Button } from "../components/ui/button";
import { Pen, Trash } from "lucide-react";

import React from "react";
import Delete from "../components/Delete";
import {
  useDeleteProductosMutation,
  useGetProductosQuery,
} from "../services/InventarioServices";

const Inventario = () => {
  const [
    deleteProductos,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useDeleteProductosMutation();

  const { data } = useGetProductosQuery(undefined, {
    refetchOnReconnect: true,
  });
  const dataProductos = {
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
            <Button variant="ghost">
              <Pen size={15} />
            </Button>{" "}
            <Delete
              title={`Borrar ${row.name}`}
              message="Esta seguro que desea eliminar esta categoria"
              action={() => deleteProductos(row.id)}
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
          Inventario
        </h1>
      </div>
      <div className="flex">
        <Tabla data={dataProductos} />
      </div>
    </div>
  );
};

export default Inventario;
