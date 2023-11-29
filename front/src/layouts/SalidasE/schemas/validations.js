import * as Yup from "yup";
import checkout from "./form";

const {
  formField: { output_description },
} = checkout;

const validations = [
  Yup.object().shape({
    [output_description.name]: Yup.string().required(
      output_description.errorMsg
    ),
  }),
];

export default validations;
