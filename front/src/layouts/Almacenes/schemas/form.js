const form = {
  formId: "new-almacen",
  formField: {
    name: {
      name: "name",
      label: "Nombre",
      type: "text",
      errorMsg: "El nombre es requerido.",
    },
    geolocalizacion: {
      name: "geolocalizacion",
      label: "Geolocalizacion",
      type: "text",
      errorMsg: "La geolocalizacion es requerida.",
    },
  },
};

export default form;
