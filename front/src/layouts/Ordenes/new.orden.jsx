import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreateOrdenesMutation,
  useEditOrdenesMutation,
  useLazyGetOrdenesByIdQuery,
} from "../../services/OrdenesServices";
import AddOrden from "./components/orden.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewOrden() {
  const [
    createOrden,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreateOrdenesMutation();
  const [
    editOrden,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditOrdenesMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getOrdenById, { data: orden }] = useLazyGetOrdenesByIdQuery();
  const submitForm = async (values, actions) => {
    const { productos, ...rest } = values;
    try {
      if (!id) {
        await createOrden({ ...rest, productos: productos.map((el) => el.id) });
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        const { productos, ...rest } = modifiedFields;
        if (Object.keys(modifiedFields).length !== 0) {
          await editOrden({
            id: id,
            ...rest,
            productos: productos.map((el) => el.id),
          });
        }
      }
      if (isSuccessC || isSuccessE) {
        actions.setSubmitting(false);
        actions.resetForm();
        location.pathname.includes("/dashboard/ordenes")
          ? navigate(`/dashboard/ordenes`)
          : navigate(`/dashe/ordenes`);
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
            {/* prueba */}

            {location.pathname.includes("/dashboard") ? (
              <>
                <h1 className="text-3xl font-bold">Nueva orden</h1>
                <div className="text-xl font-normal text-black">
                  {!id
                    ? "Introduzca la información relacionada a la orden por agregar"
                    : "Edite la información relacionada a la orden"}
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">Nueva venta</h1>
                <div className="text-xl font-normal text-black">
                  {!id
                    ? "Introduzca la información relacionada a la venta por agregar"
                    : "Edite la información relacionada a la venta"}
                </div>
              </>
            )}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, setFieldValue, handleBlur }) => {
              useEffect(() => {
                if (id) {
                  getOrdenById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(
                        formField.embajador.name,
                        res?.embajador,
                        true
                      );
                      setFieldValue(formField.number.name, res?.number, true);
                      setFieldValue(formField.status.name, res?.status, true);
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
                      setFieldValue(formField.total.name, res?.total, true);
                      setFieldValue(
                        formField.customer_id.name,
                        res?.customer_id,
                        true
                      );
                      setFieldValue(
                        formField.billing_address.name,
                        res?.billing_address,
                        true
                      );
                      setFieldValue(
                        formField.billing_email.name,
                        res?.billing_email,
                        true
                      );
                      setFieldValue(
                        formField.billing_phone.name,
                        res?.billing_phone,
                        true
                      );
                      setFieldValue(
                        formField.shipping_address.name,
                        res?.shipping_address,
                        true
                      );
                      setFieldValue(formField.paid.name, res?.paid, true);
                      setFieldValue(
                        formField.productos.name,
                        res?.productos,
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
                        <AddOrden
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
                              location.pathname.includes("/dashboard/ordenes")
                                ? navigate(`/dashboard/ordenes`)
                                : navigate(`/dashe/ordenes`);
                            }}
                            className="bg-dark text-black px-4 py-2 rounded-md"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="bg-primary text-white px-4 py-2 rounded-md"
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

export default NewOrden;
