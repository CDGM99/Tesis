import checkout from "./form";

const {
  formField: { name, apellidos, email, password, password1, groups },
} = checkout;

const initialValues = {
  [name.name]: "",
  [apellidos.name]: "",
  [email.name]: "",
  [password.name]: "",
  [password1.name]: "",
  [groups.name]: "",
};

const initialValuesEdit = {
  [name.name]: "",
  [apellidos.name]: "",
  [email.name]: "",
  [groups.name]: "",
};

export { initialValues, initialValuesEdit };
