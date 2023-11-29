const form = {
  formId: "new-proveedor",
  formField: {
    name: {
      name: "name",
      label: "Nombre",
      type: "text",
      errorMsg: "El nombre es requerido.",
    },
    code: {
      name: "code",
      label: "Código",
      type: "text",
      errorMsg: "El código es requerido.",
    },
    nit: {
      name: "nit",
      label: "Nit",
      type: "text",
      errorMsg: "El nit es requerido.",
    },
    contract: {
      name: "contract",
      label: "Contrato",
      type: "text",
      errorMsg: "El contrato es requerido.",
    },
    account: {
      name: "account",
      label: "Cuenta",
      type: "text",
      errorMsg: "La cuenta es requerida.",
    },
    address: {
      name: "address",
      label: "Dirección",
      type: "text",
      errorMsg: "La Dirección es requerida.",
    },
    total: {
      name: "total",
      label: "Total a pagar",
      type: "text",
      errorMsg: "El total a pagar es requerido.",
    },
    paid: {
      name: "paid",
      label: "Pagado",
      type: "select",
      errorMsg: "Si el proveedor está pagado o no es requerido.",
    },
  },
};

export default form;
