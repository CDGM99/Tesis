import PropTypes from "prop-types";
import FormField from "../../../components/FormField";

function AddSalidase({ formData }) {
  const { formField, values, handleBlur } = formData;
  const { output_description } = formField;
  const { output_description: output_descriptionV } = values;

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={output_description.type}
              label={output_description.label}
              name={output_description.name}
              value={output_descriptionV}
              placeholder={output_description.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

AddSalidase.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddSalidase;
