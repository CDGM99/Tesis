import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

function AddPagop({ formData }) {
  const { formField, values, handleBlur } = formData;
  const { name, code, nit, contract, account, address, paid } = formField;
  const {
    name: nameV,
    code: codeV,
    nit: nitV,
    contract: contractV,
    account: accountV,
    address: addressV,
    paid: paidV,
  } = values;

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <FormField
              type={name.type}
              label={name.label}
              name={name.name}
              value={nameV}
              placeholder={name.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={code.type}
              label={code.label}
              name={code.name}
              value={codeV}
              placeholder={code.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={nit.type}
              label={nit.label}
              name={nit.name}
              value={nitV}
              placeholder={nit.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={contract.type}
              label={contract.label}
              name={contract.name}
              value={contractV}
              placeholder={contract.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={account.type}
              label={account.label}
              name={account.name}
              value={accountV}
              placeholder={account.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={address.type}
              label={address.label}
              name={address.name}
              value={addressV}
              placeholder={address.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={paid.name}
              label={paid.label}
              value={paidV}
              // onValueChange={(value) => setFieldValue(paid.name, value, true)}
              onBlur={handleBlur}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {["Pagado", "No pagado"].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}

AddPagop.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddPagop;
