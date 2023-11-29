import checkout from "./form";

const {
  formField: { output_description },
} = checkout;

const initialValues = {
  [output_description.name]: "",
};

export default initialValues;
