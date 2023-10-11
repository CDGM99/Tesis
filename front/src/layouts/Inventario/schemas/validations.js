import * as Yup from "yup";
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

const validations = [
  Yup.object().shape({
    [almacen.name]: Yup.string().required(almacen.errorMsg),
    [proveedor.name]: Yup.string().required(proveedor.errorMsg),
    [name.name]: Yup.string().required(name.errorMsg),
    [sku.name]: Yup.string().required(sku.errorMsg),
    [picture.name]: Yup.string().required(picture.errorMsg),
    [brand.name]: Yup.string().required(brand.errorMsg),
    [slug.name]: Yup.string().required(slug.errorMsg),
    [date_created.name]: Yup.date().required(date_created.errorMsg),
    [date_modified.name]: Yup.date().required(date_modified.errorMsg),
    [type.name]: Yup.string().required(type.errorMsg),
    [status.name]: Yup.string().required(status.errorMsg),
    [on_sale.name]: Yup.string().required(on_sale.errorMsg),
    [description.name]: Yup.string().required(description.errorMsg),
    [short_description.name]: Yup.string().required(short_description.errorMsg),
    [price.name]: Yup.string().required(price.errorMsg),
    [regular_price.name]: Yup.string().required(regular_price.errorMsg),
    [stock_quantity.name]: Yup.string().required(stock_quantity.errorMsg),
    [cost.name]: Yup.string().required(cost.errorMsg),
    [product_id.name]: Yup.string().required(product_id.errorMsg),
  }),
];

export default validations;
