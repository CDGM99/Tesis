const form = {
  formId: "new-embajador",
  formField: {
    name: {
      name: "name",
      label: "Nombre",
      type: "text",
      errorMsg: "El nombre es requerido.",
    },
    refered_number: {
      name: "refered_number",
      label: "Número de referido",
      type: "number",
      errorMsg: "El número de referido es requerido.",
    },
    retribution_for_sales: {
      name: "retribution_for_sales",
      label: "Pago por ventas",
      type: "number",
      errorMsg: "El pago por ventas es requerido.",
    },
    retribution_for_fortnight: {
      name: "retribution_for_fortnight",
      label: "Pago quincenal",
      type: "number",
      errorMsg: "El pago quincenal es requerido.",
    },
    payment_date: {
      name: "payment_date",
      label: "Fecha de pago",
      type: "date",
      errorMsg: "La fecha de pago es requerida.",
    },
    payment_status: {
      name: "payment_status",
      label: "Estado del pago",
      type: "text",
      errorMsg: "El estado del pago es requerido.",
    },
    payment_method: {
      name: "payment_method",
      label: "Método de pago",
      type: "text",
      errorMsg: "El método de pago es requerido.",
    },
    paid: {
      name: "paid",
      label: "Pagado",
      type: "select",
      errorMsg: "Si el embajador está pagado o no es requerido.",
    },
  },
};

export default form;
