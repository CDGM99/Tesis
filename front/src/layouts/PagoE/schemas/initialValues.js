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

const initialValues = {
  [name.name]: "",
  [refered_number.name]: "",
  [retribution_for_sales.name]: "",
  [retribution_for_fortnight.name]: "",
  [payment_date.name]: "",
  [payment_status.name]: "",
  [payment_method.name]: "",
  [paid.name]: "",
};

export default initialValues;
