import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useGetProductosQuery } from "../../../services/InventarioServices";

function AddFacturasi({ formData }) {
  const { data } = useGetProductosQuery(undefined, {
    refetchOnReconnect: true,
  });
  const { formField, values, handleBlur, setFieldValue } = formData;
  const { producto, worker_in_charge, paid, cost, date_created, description } =
    formField;
  const {
    producto: productoV,
    worker_in_charge: worker_in_chargeV,
    paid: paidV,
    cost: costV,
    date_created: date_createdV,
    description: descriptionV,
  } = values;

  const handleValueChange = (value) => {
    const isPaid = value === "Pagado";
    setFieldValue(paid.name, isPaid);
  };
  const displayedValue = paidV ? "Pagado" : "No pagado";

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <FormField
              type={producto.type}
              label={producto.label}
              name={producto.name}
              value={productoV}
              placeholder={producto.placeholder}
              onBlur={handleBlur}
              as={
                <Select>
                  {data?.map((producto) => {
                    <SelectItem key={producto.id}>{producto.name}</SelectItem>;
                  })}
                </Select>
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={worker_in_charge.type}
              label={worker_in_charge.label}
              name={worker_in_charge.name}
              value={worker_in_chargeV}
              placeholder={worker_in_charge.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={cost.type}
              label={cost.label}
              name={cost.name}
              value={costV}
              placeholder={cost.placeholder}
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
              type={description.type}
              label={description.label}
              name={description.name}
              value={descriptionV}
              placeholder={description.placeholder}
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
      </div>
    </div>
  );
}

AddFacturasi.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddFacturasi;
