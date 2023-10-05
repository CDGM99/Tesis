import PropTypes from "prop-types";
import FormField from "../../../components/FormField";

function AddOrden({ formData }) {
  const { formField, values, handleBlur } = formData;
  const {
    embajador,
    order_id,
    number,
    order_key,
    status,
    date_created,
    date_modified,
    discount_total,
    discount_tax,
    shipping_total,
    cart_tax,
    total,
    customer_id,
    customer_user_agent,
    billing_address,
    billing_email,
    billing_phone,
    shipping_address,
    payment_method,
    date_paid,
    paid,
    productos,
  } = formField;
  const {
    embajador: embajadorV,
    order_id: order_idV,
    number: numberV,
    order_key: order_keyV,
    status: statusV,
    date_created: date_createdV,
    date_modified: date_modifiedV,
    discount_total: discount_totalV,
    discount_tax: discount_taxV,
    shipping_total: shipping_totalV,
    cart_tax: cart_taxV,
    total: totalV,
    customer_id: customer_idV,
    customer_user_agent: customer_user_agentV,
    billing_address: billing_addressV,
    billing_email: billing_emailV,
    billing_phone: billing_phoneV,
    shipping_address: shipping_addressV,
    payment_method: payment_methodV,
    date_paid: date_paidV,
    paid: paidV,
    productos: productosV,
  } = values;

  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <FormField
              type={embajador.type}
              label={embajador.label}
              name={embajador.name}
              value={embajadorV}
              placeholder={embajador.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={order_id.type}
              label={order_id.label}
              name={order_id.name}
              value={order_idV}
              placeholder={order_id.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={number.type}
              label={number.label}
              name={number.name}
              value={numberV}
              placeholder={number.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={order_key.type}
              label={order_key.label}
              name={order_key.name}
              value={order_keyV}
              placeholder={order_key.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={status.type}
              label={status.label}
              name={status.name}
              value={statusV}
              placeholder={status.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={date_created.type}
              label={date_created.label}
              name={date_created.name}
              value={date_createdV}
              placeholder={date_created.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={date_modified.type}
              label={date_modified.label}
              name={date_modified.name}
              value={date_modifiedV}
              placeholder={date_modified.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={discount_total.type}
              label={discount_total.label}
              name={discount_total.name}
              value={discount_totalV}
              placeholder={discount_total.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={discount_tax.type}
              label={discount_tax.label}
              name={discount_tax.name}
              value={discount_taxV}
              placeholder={discount_tax.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={shipping_total.type}
              label={shipping_total.label}
              name={shipping_total.name}
              value={shipping_totalV}
              placeholder={shipping_total.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={cart_tax.type}
              label={cart_tax.label}
              name={cart_tax.name}
              value={cart_taxV}
              placeholder={cart_tax.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={total.type}
              label={total.label}
              name={total.name}
              value={totalV}
              placeholder={total.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={customer_id.type}
              label={customer_id.label}
              name={customer_id.name}
              value={customer_idV}
              placeholder={customer_id.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={customer_user_agent.type}
              label={customer_user_agent.label}
              name={customer_user_agent.name}
              value={customer_user_agentV}
              placeholder={customer_user_agent.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={billing_address.type}
              label={billing_address.label}
              name={billing_address.name}
              value={billing_addressV}
              placeholder={billing_address.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={billing_email.type}
              label={billing_email.label}
              name={billing_email.name}
              value={billing_emailV}
              placeholder={billing_email.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={billing_phone.type}
              label={billing_phone.label}
              name={billing_phone.name}
              value={billing_phoneV}
              placeholder={billing_phone.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={shipping_address.type}
              label={shipping_address.label}
              name={shipping_address.name}
              value={shipping_addressV}
              placeholder={shipping_address.placeholder}
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
              type={date_paid.type}
              label={date_paid.label}
              name={date_paid.name}
              value={date_paidV}
              placeholder={date_paid.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={paid.type}
              label={paid.label}
              name={paid.name}
              value={paidV}
              placeholder={paid.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={productos.type}
              label={productos.label}
              name={productos.name}
              value={productosV}
              placeholder={productos.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

AddOrden.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddOrden;
