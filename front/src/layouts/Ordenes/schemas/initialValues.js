import checkout from "./form";

const {
  formField: {
    embajador,
    order_id,
    number,
    order_key,
    status,
    date_created,
    date_modified,
    discount_total,
    discount_tax,
    shipping_total,
    cart_tax,
    total,
    customer_id,
    customer_user_agent,
    billing_address,
    billing_email,
    billing_phone,
    shipping_address,
    payment_method,
    date_paid,
    paid,
    productos,
  },
} = checkout;

const initialValues = {
  [embajador.name]: "",
  [order_id.name]: "",
  [number.name]: "",
  [order_key.name]: "",
  [status.name]: "",
  [date_created.name]: "",
  [date_modified.name]: "",
  [discount_total.name]: "",
  [discount_tax.name]: "",
  [shipping_total.name]: "",
  [cart_tax.name]: "",
  [total.name]: "",
  [customer_id.name]: "",
  [customer_user_agent.name]: "",
  [billing_address.name]: "",
  [billing_email.name]: "",
  [billing_phone.name]: "",
  [shipping_address.name]: "",
  [payment_method.name]: "",
  [date_paid.name]: "",
  [paid.name]: "",
  [productos.name]: "",
};

export default initialValues;
