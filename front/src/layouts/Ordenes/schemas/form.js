const form = {
  formId: "new-orden",
  formField: {
    embajador: {
      name: "embajador",
      label: "Embajador",
      type: "select",
      errorMsg: "El embajador es requerido.",
    },
    order_id: {
      name: "order_id",
      label: "Id de la orden",
      type: "text",
      errorMsg: "El id de la orden es requerido.",
    },
    number: {
      name: "number",
      label: "Numero de la orden",
      type: "text",
      errorMsg: "El numero de la orden es requerido.",
    },
    order_key: {
      name: "order_key",
      label: "Llave de la orden",
      type: "text",
      errorMsg: "La llave de la orden es requerida.",
    },
    status: {
      name: "status",
      label: "Estado",
      type: "text",
      errorMsg: "El estado es requerio.",
    },
    date_created: {
      name: "date_created",
      label: "Fecha de creación",
      type: "date",
      errorMsg: "La fecha de creación es requerida.",
    },
    date_modified: {
      name: "date_modified",
      label: "Fecha de modificación",
      type: "date",
      errorMsg: "La fecha de modificación es requerida.",
    },
    discount_total: {
      name: "discount_total",
      label: "Descuento total",
      type: "number",
      errorMsg: "El descuento total es requerido.",
    },
    discount_tax: {
      name: "discount_tax",
      label: "Descuento de impuestos",
      type: "number",
      errorMsg: "El descuento de impuestos es requerido.",
    },
    shipping_total: {
      name: "shipping_total",
      label: "Total del envío",
      type: "number",
      errorMsg: "El total del envío es requerido.",
    },
    cart_tax: {
      name: "cart_tax",
      label: "Descuento del carrito",
      type: "text",
      errorMsg: "El descuento del carrito es requerido.",
    },
    total: {
      name: "total",
      label: "Total ",
      type: "number",
      errorMsg: "El total es requerido.",
    },
    customer_id: {
      name: "customer_id",
      label: "Id del consumidor",
      type: "number",
      errorMsg: "El id del consumidor es requerido.",
    },
    customer_user_agent: {
      name: "customer_user_agent",
      label: "Agente del consumidor",
      type: "text",
      errorMsg: "El agente del consumidor es requerido.",
    },
    billing_address: {
      name: "billing_address",
      label: "Dirección del consumidor",
      type: "text",
      errorMsg: "La dirección del consumidor es requerida.",
    },
    billing_email: {
      name: "billing_email",
      label: "Correo del consumidor",
      type: "text",
      errorMsg: "El correo del consumidor es requerido.",
    },
    billing_phone: {
      name: "billing_phone",
      label: "Teléfono del consumidor",
      type: "number",
      errorMsg: "El Teléfono del consumidor es requerido.",
    },
    shipping_address: {
      name: "shipping_address",
      label: "Dirección del envío",
      type: "text",
      errorMsg: "La dirección del envío es requerida.",
    },
    payment_method: {
      name: "payment_method",
      label: "Método de pago",
      type: "text",
      errorMsg: "El método de pago es requerido.",
    },
    date_paid: {
      name: "date_paid",
      label: "Fecha de pago",
      type: "date",
      errorMsg: "La Fecha de pago es requerido.",
    },
    paid: {
      name: "paid",
      label: "Pagado",
      type: "checkbox",
      errorMsg: "Si la orden está pagada o no es requerido.",
    },
    productos: {
      name: "productos",
      label: "Productos",
      errorMsg: "Los Productos son requeridos.",
    },
  },
};

export default form;
