import PropTypes from "prop-types";
import FormField from "../../../components/FormField";

function AddAlmacen({ formData }) {
  const { formField, values, handleBlur } = formData;
  const { name, geolocalizacion } = formField;
  const { name: nameV, geolocalizacion: geolocalizacionV } = values;

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
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
              type={geolocalizacion.type}
              label={geolocalizacion.label}
              name={geolocalizacion.name}
              value={geolocalizacionV}
              placeholder={geolocalizacion.placeholder}
              onBlur={handleBlur}
            />
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
