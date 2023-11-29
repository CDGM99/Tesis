import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

function AddAlmacen({ formData }) {
  const { formField, values, handleBlur, setFieldValue } = formData;
  const { name, geolocalizacion } = formField;
  const { name: nameV, geolocalizacion: geolocalizacionV } = values;
  const mun = [
    "Habana Vieja",
    "Centro Habana",
    "Vedado",
    "Plaza de la Revolución",
    "Playa",
    "Marianao",
    "La Lisa",
    "Guanabacoa",
    "Regla",
    "San Miguel del Padrón",
    "Boyeros",
    "Cotorro",
  ];
  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 ">
            <FormField
              type={name.type}
              label={name.label}
              name={name.name}
              value={nameV}
              placeholder={name.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={geolocalizacion.name}
              label={geolocalizacion.label}
              value={geolocalizacionV}
              onValueChange={(value) =>
                setFieldValue(geolocalizacion.name, value, true)
              }
              onBlur={handleBlur}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {mun.map((pageSize) => (
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

AddAlmacen.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddAlmacen;
