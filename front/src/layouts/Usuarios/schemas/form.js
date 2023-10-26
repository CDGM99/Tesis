const form = {
  formId: "new-almacen",
  formField: {
    name: {
      name: "name",
      label: "Nombre",
      type: "text",
      errorMsg: "El nombre es requerido.",
    },
    apellidos: {
      name: "apellidos",
      label: "Apellidos",
      type: "text",
      errorMsg: "Los apellidos son requeridos.",
    },
    email: {
      name: "email",
      label: "Correo electrónico",
      type: "email",
      errorMsg: "El correo electrónico es requerido.",
    },
    password: {
      name: "password",
      label: "Contraseña",
      type: "text",
      errorMsg: "La contraseña es requerida.",
    },
    password1: {
      name: "password1",
      label: "Confirma la contraseña",
      type: "text",
      errorMsg: "La confirmación de la contraseña es requerida.",
    },
    groups: {
      name: "groups",
      label: "Selecciona la especialización",
      type: "select",
      errorMsg: "La especialización es requerida.",
    },
  },
};

export default form;
