import { useLazyGetProductosByIdQuery } from "../services/InventarioServices";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";

export default function Details({ title, message, children, id }) {
  const [getProductoById, { data: producto }] = useLazyGetProductosByIdQuery();

  useEffect(() => {
    getProductoById(id);
  }, [id]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2">
          <h3>Nombre: {producto?.name}</h3>
          <h3>Almacen: {producto?.almacen.name}</h3>
          <h3>Proveedor: {producto?.proveedor.name}</h3>
          <h3>SKU: {producto?.sku}</h3>
          <h3>Foto: {producto?.picture}</h3>
          <h3>Marca: {producto?.brand}</h3>
          <h3>SLUG: {producto?.slug}</h3>
          <h3>Fecha de creación: {producto?.date_created}</h3>
          <h3>Fecha de modificación: {producto?.date_modified}</h3>
          <h3>Tipo: {producto?.type} </h3>
          <h3>Estado: {producto?.status} </h3>
          <h3>En venta: {producto?.on_sale}</h3>
          <h3>Descripción: {producto?.description}</h3>
          <h3>Descripción corta: {producto?.short_description}</h3>
          <h3>Precio: ${producto?.price}</h3>
          <h3>Precio regular: ${producto?.regular_price}</h3>
          <h3>Cantidad en inventario: {producto?.stock_quantity}</h3>
          <h3>Costo: ${producto?.cost}</h3>
          <h3>ID del producto: {producto?.product_id}</h3>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>OK</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
