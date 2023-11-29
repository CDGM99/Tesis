import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useGetPagoeQuery } from "../../../services/PagoEServices";
import { useEffect, useState } from "react";
import TransferList from "../../../components/Transferlist";
import { useGetProductosFiltersQuery } from "../../../services/InventarioServices";

function AddOrden({ formData }) {
  const { formField, values, handleBlur, setFieldValue } = formData;
  const {
    embajador,
    number,
    status,
    date_created,
    date_modified,
    total,
    customer_id,
    billing_address,
    billing_email,
    billing_phone,
    shipping_address,
    paid,
    productos,
  } = formField;
  const {
    embajador: embajadorV,
    number: numberV,
    status: statusV,
    date_created: date_createdV,
    date_modified: date_modifiedV,
    total: totalV,
    customer_id: customer_idV,
    billing_address: billing_addressV,
    billing_email: billing_emailV,
    billing_phone: billing_phoneV,
    shipping_address: shipping_addressV,
    paid: paidV,
    productos: productosV,
  } = values;

  const { data: embajadores } = useGetPagoeQuery(undefined, {
    refetchOnReconnect: true,
  });
  const { data: productos_query } = useGetProductosFiltersQuery(undefined, {
    refetchOnReconnect: true,
  });

  const [selected, setSelected] = useState(embajadorV);

  useEffect(() => {
    if (embajadores && embajadorV) {
      const foundEmbajador = embajadores.find((emb) => emb.id === embajadorV);
      if (foundEmbajador) {
        setSelected(foundEmbajador.name);
      }
    }
  }, [embajadores, embajadorV]);

  const handleEmbajador = (name) => {
    const foundItem = embajadores.find((item) => item.name === name);

    if (foundItem && foundItem.id !== undefined) {
      setSelected(foundItem.name);
      setFieldValue(embajador.name, foundItem.id, true);
    }
  };

  const handleValueChange = (value) => {
    const isPaid = value === "Pagado";
    setFieldValue(paid.name, isPaid);
  };
  const displayedValue = paidV ? "Pagado" : "No pagado";

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={embajador.name}
              label={embajador.label}
              value={selected}
              onValueChange={(name) => handleEmbajador(name)}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {embajadores?.map((el) => (
                  <SelectItem key={el.id} value={el.name}>
                    {el.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormField>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={number.type}
              label={number.label}
              name={number.name}
              value={numberV}
              placeholder={number.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={status.type}
              label={status.label}
              name={status.name}
              value={statusV}
              placeholder={status.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={date_created.type}
              label={date_created.label}
              name={date_created.name}
              value={date_createdV}
              placeholder={date_created.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={date_modified.type}
              label={date_modified.label}
              name={date_modified.name}
              value={date_modifiedV}
              placeholder={date_modified.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={total.type}
              label={total.label}
              name={total.name}
              value={totalV}
              placeholder={total.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={customer_id.type}
              label={customer_id.label}
              name={customer_id.name}
              value={customer_idV}
              placeholder={customer_id.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={billing_address.type}
              label={billing_address.label}
              name={billing_address.name}
              value={billing_addressV}
              placeholder={billing_address.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={billing_email.type}
              label={billing_email.label}
              name={billing_email.name}
              value={billing_emailV}
              placeholder={billing_email.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={billing_phone.type}
              label={billing_phone.label}
              name={billing_phone.name}
              value={billing_phoneV}
              placeholder={billing_phone.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={shipping_address.type}
              label={shipping_address.label}
              name={shipping_address.name}
              value={shipping_addressV}
              placeholder={shipping_address.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={paid.name}
              label={paid.label}
              value={displayedValue}
              onValueChange={handleValueChange}
              onBlur={handleBlur}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {["Pagado", "No pagado"].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormField>
          </div>
        </div>
        <TransferList
          title={productos.label}
          initialLeft={productos_query}
          initialRight={productosV}
          onChange={(data) => setFieldValue(productos.name, data)}
        />
      </div>
    </div>
  );
}

AddOrden.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddOrden;
