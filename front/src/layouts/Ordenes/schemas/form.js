const form = {
  formId: "new-orden",
  formField: {
    embajador: {
      name: "embajador",
      label: "Embajador",
      type: "select",
      errorMsg: "El embajador es requerido.",
    },
    number: {
      name: "number",
      label: "Numero de la orden",
      type: "text",
      errorMsg: "El numero de la orden es requerido.",
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
