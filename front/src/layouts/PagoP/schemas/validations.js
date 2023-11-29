import * as Yup from "yup";
import checkout from "./form";

const {
  formField: { name, code, nit, contract, account, address, total },
} = checkout;

const validations = [
  Yup.object().shape({
    [name.name]: Yup.string().required(name.errorMsg),
    [code.name]: Yup.string().required(code.errorMsg),
    [nit.name]: Yup.string().required(nit.errorMsg),
    [contract.name]: Yup.string().required(contract.errorMsg),
    [account.name]: Yup.string().required(account.errorMsg),
    [address.name]: Yup.string().required(address.errorMsg),
    [total.name]: Yup.string().required(total.errorMsg),
  }),
];

export default validations;
