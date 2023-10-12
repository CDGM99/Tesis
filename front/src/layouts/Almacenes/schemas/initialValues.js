import checkout from "./form";

const {
  formField: { name, geolocalizacion },
} = checkout;

const initialValues = {
  [name.name]: "",
  [geolocalizacion.name]: "",
};

export default initialValues;
