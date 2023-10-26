import * as Yup from "yup";
import checkout from "./form";

const {
  formField: { name, apellidos, email, password, password1, groups },
} = checkout;

const validations = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [apellidos.name]: Yup.string().required(apellidos.errorMsg),
    [email.name]: Yup.string().email(email.errorMsg).required(email.errorMsg),
    [password.name]: Yup.string()
      .required(password.errorMsg)
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
        "Debe tener al menos 8 caracteres, una letra mayúscula, un número y un símbolo"
      ),
    [password1.name]: Yup.string()
      .required(password1.errorMsg)
      .oneOf([Yup.ref(password.name)], "Las contraseñas deben coincidir"),
    [groups.name]: Yup.array().of(Yup.string()).required(groups.errorMsg),
  }),
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [apellidos.name]: Yup.string().required(apellidos.errorMsg),
    [email.name]: Yup.string().email(email.errorMsg).required(email.errorMsg),
    [groups.name]: Yup.array().of(Yup.string()).required(groups.errorMsg),
  }),
];

export default validations;
