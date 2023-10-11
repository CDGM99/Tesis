import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreateProductosMutation,
  useEditProductosMutation,
  useLazyGetProductosByIdQuery,
} from "../../services/InventarioServices";
import AddProducto from "./components/inventario.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewProducto() {
  const [
    createProducto,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreateProductosMutation();
  const [
    editProducto,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditProductosMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getProductoById, { data: producto }] = useLazyGetProductosByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createProducto(values);
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        if (Object.keys(modifiedFields).length !== 0) {
          await editProducto({ id: id, ...modifiedFields });
        }
      }
      navigate("/dashboard/inventario");
      if (isSuccessC || isSuccessE) {
        actions.setSubmitting(false);
        actions.resetForm();
      }
    } catch (error) {
      console.error(error);
      actions.setSubmitting(true);
    }
  };

  const handleSubmit = (values, actions) => {
    submitForm(values, actions);
  };

  return (
    <div className="mt-5 mb-20">
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-8/12">
          <div className="mt-6 mb-8 text-center">
            <div className="mb-1">
              <h1 className="text-3xl font-bold">Inventario</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada al producto por agregar"
                : "Edite la información relacionada al producto"}
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, setFieldValue, handleBlur }) => {
              useEffect(() => {
                if (id) {
                  getProductoById(id)
                    .unwrap()
                    .then((res) => {
                      console.log(res);
                      setOldValues(res);
                      setFieldValue(
                        formField.almacen.name,
                        res?.almacen.name,
                        true
                      );
                      setFieldValue(
                        formField.proveedor.name,
                        res?.proveedor.name,
                        true
                      );
                      setFieldValue(formField.name.name, res?.name, true);
                      setFieldValue(formField.sku.name, res?.sku, true);
                      setFieldValue(formField.picture.name, res?.picture, true);
                      setFieldValue(formField.brand.name, res?.brand, true);
                      setFieldValue(formField.slug.name, res?.slug, true);
                      setFieldValue(
                        formField.date_created.name,
                        res?.date_created,
                        true
                      );
                      setFieldValue(
                        formField.date_modified.name,
                        res?.date_modified,
                        true
                      );
                      setFieldValue(formField.type.name, res?.type, true);
                      setFieldValue(formField.status.name, res?.status, true);
                      setFieldValue(formField.on_sale.name, res?.on_sale, true);
                      setFieldValue(
                        formField.description.name,
                        res?.description,
                        true
                      );
                      setFieldValue(
                        formField.short_description.name,
                        res?.short_description,
                        true
                      );
                      setFieldValue(formField.price.name, res?.price, true);
                      setFieldValue(
                        formField.regular_price.name,
                        res?.regular_price,
                        true
                      );
                      setFieldValue(
                        formField.stock_quantity.name,
                        res?.stock_quantity,
                        true
                      );
                      setFieldValue(formField.cost.name, res?.cost, true);
                      setFieldValue(
                        formField.product_id.name,
                        res?.product_id,
                        true
                      );
                      setFieldValue(formField.weigth.name, res?.weigth, true);
                      setFieldValue(formField.format.name, res?.format, true);
                      setFieldValue(formField.volume.name, res?.volume, true);
                      setFieldValue(
                        formField.caducity_date.name,
                        res?.caducity_date,
                        true
                      );
                      setFieldValue(
                        formField.production_date.name,
                        res?.production_date,
                        true
                      );
                      setFieldValue(formField.amp.name, res?.amp, true);
                      setFieldValue(formField.volt.name, res?.volt, true);
                      setFieldValue(
                        formField.compatible_brand.name,
                        res?.compatible_brand,
                        true
                      );
                    });
                }
              }, [id]);

              return (
                <Form id={formId} autoComplete="off">
                  <div className="h-full">
                    <div className="p-3">
                      <div>
                        <AddProducto
                          formData={{
                            values,
                            touched,
                            formField,
                            errors,
                            handleBlur,
                            setFieldValue,
                          }}
                        />
                        <div className="mt-2 w-full flex justify-between">
                          <button
                            onClick={(e) => {
                              navigate("/dashboard/inventario");
                            }}
                            className="bg-primary text-white px-4 py-2 rounded-md"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="bg-dark text-blue-400 px-4 py-2 rounded-md"
                          >
                            Aceptar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default NewProducto;
