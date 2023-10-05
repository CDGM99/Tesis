import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

function AddPagoe({ formData }) {
  const { formField, values, handleBlur, setFieldValue } = formData;
  const {
    name,
    refered_number,
    retribution_for_sales,
    retribution_for_fortnight,
    payment_date,
    payment_status,
    payment_method,
    paid,
  } = formField;
  const {
    name: nameV,
    refered_number: refered_numberV,
    retribution_for_sales: retribution_for_salesV,
    retribution_for_fortnight: retribution_for_fortnightV,
    payment_date: payment_dateV,
    payment_status: payment_statusV,
    payment_method: payment_methodV,
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
              type={refered_number.type}
              label={refered_number.label}
              name={refered_number.name}
              value={refered_numberV}
              placeholder={refered_number.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={retribution_for_sales.type}
              label={retribution_for_sales.label}
              name={retribution_for_sales.name}
              value={retribution_for_salesV}
              placeholder={retribution_for_sales.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={retribution_for_fortnight.type}
              label={retribution_for_fortnight.label}
              name={retribution_for_fortnight.name}
              value={retribution_for_fortnightV}
              placeholder={retribution_for_fortnight.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={payment_date.type}
              label={payment_date.label}
              name={payment_date.name}
              value={payment_dateV}
              placeholder={payment_date.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={payment_status.type}
              label={payment_status.label}
              name={payment_status.name}
              value={payment_statusV}
              placeholder={payment_status.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={payment_method.type}
              label={payment_method.label}
              name={payment_method.name}
              value={payment_methodV}
              placeholder={payment_method.placeholder}
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
              onValueChange={(value) => setFieldValue(paid.name, value, true)}
              onBlur={handleBlur}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {page.map((pageSize) => {
                  console.log(pageSize);
                  return (
                    <SelectItem key={pageSize.value} value={pageSize.value}>
                      {pageSize.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
const page = [
  { label: "Pagado", value: true },
  { label: "No Pagado", value: false },
];
AddPagoe.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddPagoe;

{
  /* <FormField
              type={paid.type}
              label={paid.label}
              name={paid.name}
              value={paidV}
              placeholder={paid.placeholder}
              onBlur={handleBlur}
            /> */
}
