const form = {
  formId: "new-inventario",
  formField: {
    almacen: {
      name: "almacen",
      label: "Almacen",
      type: "select",
      errorMsg: "El almacen es requerido.",
    },
    proveedor: {
      name: "proveedor",
      label: "Proveedor",
      type: "select",
      errorMsg: "El proveedor es requerido.",
    },
    name: {
      name: "name",
      label: "Nombre",
      type: "text",
      errorMsg: "El nombre es requerido.",
    },
    sku: {
      name: "sku",
      label: "SKU",
      type: "text",
      errorMsg: "El SKU es requerido.",
    },
    picture: {
      name: "picture",
      label: "Foto",
      type: "text",
      errorMsg: "La Foto es requerida.",
    },
    brand: {
      name: "brand",
      label: "Marca",
      type: "text",
      errorMsg: "La marca es requerida.",
    },
    slug: {
      name: "slug",
      label: "SLUG",
      type: "text",
      errorMsg: "El SLUG es requerido.",
    },
    date_created: {
      name: "date_created",
      label: "Fecha de creación",
      type: "date",
      errorMsg: "La fecha de creación es requerida.",
    },
    date_modified: {
      name: "date_modified",
      label: "Fecha de modificación",
      type: "date",
      errorMsg: "La fecha de modificación es requerida.",
    },
    type: {
      name: "type",
      label: "Tipo",
      type: "text",
      errorMsg: "El tipo es requerido.",
    },
    status: {
      name: "status",
      label: "Estado",
      type: "text",
      errorMsg: "El estado es requerido.",
    },
    on_sale: {
      name: "on_sale",
      label: "Cantidad en venta",
      type: "number",
      errorMsg: "La cantidad en venta es requerida.",
    },
    description: {
      name: "description",
      label: "Descripción",
      type: "text",
      errorMsg: "La descripción es requerida.",
    },
    short_description: {
      name: "short_description",
      label: "Descripción corta",
      type: "text",
      errorMsg: "La descripción corta es requerida.",
    },
    price: {
      name: "price",
      label: "Precio",
      type: "number",
      errorMsg: "El precio es requerido.",
    },
    regular_price: {
      name: "regular_price",
      label: "Precio regular",
      type: "number",
      errorMsg: "El precio regular es requerido.",
    },
    stock_quantity: {
      name: "stock_quantity",
      label: "Cantidad en inventario",
      type: "number",
      errorMsg: "La cantidad en inventario es requerida.",
    },
    cost: {
      name: "cost",
      label: "Costo",
      type: "number",
      errorMsg: "El costo es requerido.",
    },
    product_id: {
      name: "product_id",
      label: "ID del producto",
      type: "number",
      errorMsg: "El ID del producto es requerido.",
    },
  },
};

export default form;
