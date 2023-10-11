import PropTypes from "prop-types";
import FormField from "../../../components/FormField";
import { useEffect, useState } from "react";
import { useGetAlmacenesQuery } from "../../../services/AlmacenServices";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useGetPagopQuery } from "../../../services/PagoPServices";

function AddProducto({ formData }) {
  const { formField, values, handleBlur, setFieldValue } = formData;
  const {
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
    weigth,
    format,
    volume,
    caducity_date,
    production_date,
    amp,
    volt,
    compatible_brand,
  } = formField;
  const {
    almacen: almacenV,
    proveedor: proveedorV,
    name: nameV,
    sku: skuV,
    picture: pictureV,
    brand: brandV,
    slug: slugV,
    date_created: date_createdV,
    date_modified: date_modifiedV,
    type: typeV,
    status: statusV,
    on_sale: on_saleV,
    description: descriptionV,
    short_description: short_descriptionV,
    price: priceV,
    regular_price: regular_priceV,
    stock_quantity: stock_quantityV,
    cost: costV,
    product_id: product_idV,
    weigth: weigthV,
    format: formatV,
    volume: volumeV,
    caducity_date: caducity_dateV,
    production_date: production_dateV,
    amp: ampV,
    volt: voltV,
    compatible_brand: compatible_brandV,
  } = values;
  console.log(almacenV, proveedorV);

  const { data: almacenes } = useGetAlmacenesQuery(undefined, {
    refetchOnReconnect: true,
  });

  const { data: proveedores } = useGetPagopQuery(undefined, {
    refetchOnReconnect: true,
  });
  const [selected, setSelected] = useState(almacenV);
  const [selectedP, setSelectedP] = useState(proveedorV);

  useEffect(() => {
    if (almacenes && almacenV) {
      const foundAlmacen = almacenes.find((almacen) => almacen.id === almacenV);
      if (foundAlmacen) {
        setSelected(foundAlmacen.name);
      }
    }
  }, [almacenes, almacenV]);

  useEffect(() => {
    if (proveedores && proveedorV) {
      const foundProveedor = proveedores.find(
        (proveedor) => proveedor.id === proveedorV
      );
      if (foundProveedor) {
        setSelectedP(foundProveedor.name);
      }
    }
  }, [proveedores, proveedorV]);

  const handleAlmacen = (name) => {
    const foundItem = almacenes.find((item) => item.name === name);

    if (foundItem && foundItem.id !== undefined) {
      setSelected(foundItem.name);
      setFieldValue(almacen.name, foundItem.id, true);
    }
  };

  const handleProveedor = (name) => {
    const foundItem = proveedores.find((item) => item.name === name);

    if (foundItem && foundItem.id !== undefined) {
      setSelectedP(foundItem.name);
      console.log("pp", foundItem);
      setFieldValue(proveedor.name, foundItem.id, true);
      console.log("kk", selectedP);
    }
  };
  return (
    <div className="md:mt-4">
      <div className="md:mt-1.625">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={almacen.name}
              label={almacen.label}
              value={selected}
              onValueChange={(name) => handleAlmacen(name)}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {almacenes?.map((el) => (
                  <SelectItem key={el.name} value={el.name}>
                    {el.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormField>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              select
              name={proveedor.name}
              label={proveedor.label}
              value={selectedP}
              onValueChange={(name) => handleProveedor(name)}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Seleccione"} />
              </SelectTrigger>
              <SelectContent>
                {proveedores?.map((el) => (
                  <SelectItem key={el.name} value={el.name}>
                    {el.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </FormField>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
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
              type={sku.type}
              label={sku.label}
              name={sku.name}
              value={skuV}
              placeholder={sku.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={picture.type}
              label={picture.label}
              name={picture.name}
              value={pictureV}
              placeholder={picture.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={brand.type}
              label={brand.label}
              name={brand.name}
              value={brandV}
              placeholder={brand.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={slug.type}
              label={slug.label}
              name={slug.name}
              value={slugV}
              placeholder={slug.placeholder}
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
              type={type.type}
              label={type.label}
              name={type.name}
              value={typeV}
              placeholder={type.placeholder}
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
              type={on_sale.type}
              label={on_sale.label}
              name={on_sale.name}
              value={on_saleV}
              placeholder={on_sale.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={description.type}
              label={description.label}
              name={description.name}
              value={descriptionV}
              placeholder={description.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={short_description.type}
              label={short_description.label}
              name={short_description.name}
              value={short_descriptionV}
              placeholder={short_description.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={price.type}
              label={price.label}
              name={price.name}
              value={priceV}
              placeholder={price.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={regular_price.type}
              label={regular_price.label}
              name={regular_price.name}
              value={regular_priceV}
              placeholder={regular_price.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={stock_quantity.type}
              label={stock_quantity.label}
              name={stock_quantity.name}
              value={stock_quantityV}
              placeholder={stock_quantity.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={cost.type}
              label={cost.label}
              name={cost.name}
              value={costV}
              placeholder={cost.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={product_id.type}
              label={product_id.label}
              name={product_id.name}
              value={product_idV}
              placeholder={product_id.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={weigth.type}
              label={weigth.label}
              name={weigth.name}
              value={weigthV}
              placeholder={weigth.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={format.type}
              label={format.label}
              name={format.name}
              value={formatV}
              placeholder={format.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={volume.type}
              label={volume.label}
              name={volume.name}
              value={volumeV}
              placeholder={volume.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={caducity_date.type}
              label={caducity_date.label}
              name={caducity_date.name}
              value={caducity_dateV}
              placeholder={caducity_date.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={production_date.type}
              label={production_date.label}
              name={production_date.name}
              value={production_dateV}
              placeholder={production_date.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={amp.type}
              label={amp.label}
              name={amp.name}
              value={ampV}
              placeholder={amp.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={volt.type}
              label={volt.label}
              name={volt.name}
              value={voltV}
              placeholder={volt.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              type={compatible_brand.type}
              label={compatible_brand.label}
              name={compatible_brand.name}
              value={compatible_brandV}
              placeholder={compatible_brand.placeholder}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

AddProducto.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddProducto;
