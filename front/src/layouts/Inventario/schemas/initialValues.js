import checkout from "./form";

const {
  formField: {
    almacen,
    proveedor,
    name,
    sku,
    picture,
    brand,
    slug,
    date_created,
    date_modified,
    type,
    status,
    on_sale,
    description,
    short_description,
    price,
    regular_price,
    stock_quantity,
    cost,
    product_id,
  },
} = checkout;

const initialValues = {
  [almacen.name]: "",
  [proveedor.name]: "",
  [name.name]: "",
  [sku.name]: "",
  [picture.name]: "",
  [brand.name]: "",
  [slug.name]: "",
  [date_created.name]: "",
  [date_modified.name]: "",
  [type.name]: "",
  [status.name]: "",
  [on_sale.name]: "",
  [description.name]: "",
  [short_description.name]: "",
  [price.name]: "",
  [regular_price.name]: "",
  [stock_quantity.name]: "",
  [cost.name]: "",
  [product_id.name]: "",
};

export default initialValues;
