import * as Yup from "yup";
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

const validations = [
  Yup.object().shape({
    [producto.name]: Yup.string().required(producto.errorMsg),
    [worker_in_charge.name]: Yup.string().required(worker_in_charge.errorMsg),
    [paid.name]: Yup.string().required(paid.errorMsg),
    [cost.name]: Yup.string().required(cost.errorMsg),
    [date_created.name]: Yup.string().required(date_created.errorMsg),
    [description.name]: Yup.string().required(description.errorMsg),
  }),
];
export default validations;
