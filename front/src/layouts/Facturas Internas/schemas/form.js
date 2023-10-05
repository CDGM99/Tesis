const form = {
  formId: "new-almacen",
  formField: {
    producto: {
      name: "producto",
      label: "Producto",
      type: "select",
      errorMsg: "El producto es requerido.",
    },
    worker_in_charge: {
      name: "worker_in_charge",
      label: "Trabajador a cargo",
      type: "text",
      errorMsg: "El trabajador a cargo es requerido.",
    },
    cost: {
      name: "cost",
      label: "Costo",
      type: "number",
      errorMsg: "El costo es requerido.",
    },
    date_created: {
      name: "date_created",
      label: "Fecha de creación",
      type: "date",
      errorMsg: "La fecha de creación es requerido.",
    },
    description: {
      name: "description",
      label: "Descripción",
      type: "text",
      errorMsg: "La descripción es requerida.",
    },
    paid: {
      name: "paid",
      label: "Pagado",
      type: "select",
      errorMsg: "Si la factura interna está pagada o no es requerido.",
    },
  },
};

export default form;
