import checkout from "./form";

const {
  formField: {
    producto,
    worker_in_charge,
    paid,
    cost,
    date_created,
    description,
  },
} = checkout;

const initialValues = {
  [producto.name]: "",
  [worker_in_charge.name]: "",
  [cost.name]: "",
  [date_created.name]: "",
  [description.name]: "",
  [paid.name]: "",
};

export default initialValues;
