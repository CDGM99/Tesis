import checkout from "./form";

const {
  formField: { name, nit, contract, account, address, total, paid },
} = checkout;

const initialValues = {
  [name.name]: "",
  [nit.name]: "",
  [contract.name]: "",
  [account.name]: "",
  [address.name]: "",
  [total.name]: "",
  [paid.name]: "",
};

export default initialValues;
