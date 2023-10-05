import * as Yup from "yup";
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

const validations = [
  Yup.object().shape({
    [embajador.name]: Yup.string().required(embajador.errorMsg),
    [order_id.name]: Yup.string().required(order_id.errorMsg),
    [number.name]: Yup.string().required(number.errorMsg),
    [order_key.name]: Yup.string().required(order_key.errorMsg),
    [status.name]: Yup.string().required(status.errorMsg),
    [date_created.name]: Yup.string().required(date_created.errorMsg),
    [date_modified.name]: Yup.string().required(date_modified.errorMsg),
    [discount_total.name]: Yup.string().required(discount_total.errorMsg),
    [discount_tax.name]: Yup.string().required(discount_tax.errorMsg),
    [shipping_total.name]: Yup.string().required(shipping_total.errorMsg),
    [cart_tax.name]: Yup.string().required(cart_tax.errorMsg),
    [total.name]: Yup.string().required(total.errorMsg),
    [customer_id.name]: Yup.string().required(customer_id.errorMsg),
    [customer_user_agent.name]: Yup.string().required(
      customer_user_agent.errorMsg
    ),
    [billing_address.name]: Yup.string().required(billing_address.errorMsg),
    [billing_email.name]: Yup.string().required(billing_email.errorMsg),
    [billing_phone.name]: Yup.string().required(billing_phone.errorMsg),
    [shipping_address.name]: Yup.string().required(shipping_address.errorMsg),
    [payment_method.name]: Yup.string().required(payment_method.errorMsg),
    [date_paid.name]: Yup.string().required(date_paid.errorMsg),
    [paid.name]: Yup.string().required(paid.errorMsg),
    [productos.name]: Yup.string().required(productos.errorMsg),
  }),
];

export default validations;
