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

const initialValues = {
  [embajador.name]: "",
  [number.name]: "",
  [status.name]: "",
  [date_created.name]: "",
  [date_modified.name]: "",
  [total.name]: "",
  [customer_id.name]: "",
  [billing_address.name]: "",
  [billing_email.name]: "",
  [billing_phone.name]: "",
  [shipping_address.name]: "",
  [paid.name]: "",
  [productos.name]: [],
};

export default initialValues;
