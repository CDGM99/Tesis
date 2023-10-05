import checkout from "./form";

const {
  formField: { name, nit, contract, account, address, paid },
} = checkout;

const initialValues = {
  [name.name]: "",
  [nit.name]: "",
  [contract.name]: "",
  [account.name]: "",
  [address.name]: "",
  [paid.name]: "",
};

export default initialValues;
