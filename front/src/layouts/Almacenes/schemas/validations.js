import * as Yup from "yup";
import checkout from "./form";

const {
  formField: { name, geolocalizacion },
} = checkout;

const validations = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [geolocalizacion.name]: Yup.string().required(geolocalizacion.errorMsg),
  }),
];

export default validations;
