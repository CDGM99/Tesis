import * as Yup from "yup";
import checkout from "./form";

const {
  formField: {
    name,
    refered_number,
    retribution_for_sales,
    retribution_for_fortnight,
    payment_date,
    payment_status,
    payment_method,
    paid,
  },
} = checkout;

const validations = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [refered_number.name]: Yup.number().required(refered_number.errorMsg),
    [retribution_for_sales.name]: Yup.number().required(
      retribution_for_sales.errorMsg
    ),
    [retribution_for_fortnight.name]: Yup.number().required(
      retribution_for_fortnight.errorMsg
    ),
    [payment_date.name]: Yup.string().required(payment_date.errorMsg),
    [payment_status.name]: Yup.string().required(payment_status.errorMsg),
    [payment_method.name]: Yup.string().required(payment_method.errorMsg),
  }),
];

export default validations;
