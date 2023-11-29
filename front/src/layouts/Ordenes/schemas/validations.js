import * as Yup from "yup";
import checkout from "./form";

const {
  formField: {
    embajador,
    number,
    status,
    date_created,
    date_modified,
    total,
    customer_id,
    billing_address,
    billing_email,
    billing_phone,
    shipping_address,
    paid,
    productos,
  },
} = checkout;

const validations = [
  Yup.object().shape({
    [embajador.name]: Yup.string().required(embajador.errorMsg),
    [number.name]: Yup.string().required(number.errorMsg),
    [status.name]: Yup.string().required(status.errorMsg),
    [date_created.name]: Yup.string().required(date_created.errorMsg),
    [date_modified.name]: Yup.string().required(date_modified.errorMsg),
    [total.name]: Yup.string().required(total.errorMsg),
    [customer_id.name]: Yup.string().required(customer_id.errorMsg),
    [billing_address.name]: Yup.string().required(billing_address.errorMsg),
    [billing_email.name]: Yup.string().required(billing_email.errorMsg),
    [billing_phone.name]: Yup.string().required(billing_phone.errorMsg),
    [shipping_address.name]: Yup.string().required(shipping_address.errorMsg),
    [paid.name]: Yup.string().required(paid.errorMsg),
  }),
];

export default validations;
