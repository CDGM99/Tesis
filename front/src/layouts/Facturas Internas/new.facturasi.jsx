import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreateFacturasiMutation,
  useEditFacturasiMutation,
  useLazyGetFacturasiByIdQuery,
} from "../../services/FacturasIServices";
import AddFacturasi from "./components/facturasi.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewFacturasi() {
  const [
    createFacturasi,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreateFacturasiMutation();
  const [
    editFacturasi,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditFacturasiMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getFacturasiById, { data: facturasi }] =
    useLazyGetFacturasiByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createFacturasi(values);
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        if (Object.keys(modifiedFields).length !== 0) {
          await editFacturasi({ id: id, ...modifiedFields });
        }
      }
      navigate("/dashe/facturasi");
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
              <h1 className="text-3xl font-bold">Facturas internas</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada a las facturas internas por agregar"
                : "Edite la información relacionada a las facturas internas"}
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
                  getFacturasiById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(
                        formField.producto.name,
                        res?.producto,
                        true
                      );
                      setFieldValue(
                        formField.worker_in_charge.name,
                        res?.worker_in_charge,
                        true
                      );
                      setFieldValue(formField.paid.name, res?.paid, true);
                      setFieldValue(formField.cost.name, res?.cost, true);
                      setFieldValue(
                        formField.date_created.name,
                        res?.date_created,
                        true
                      );
                      setFieldValue(
                        formField.description.name,
                        res?.description,
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
                        <AddFacturasi
                          formData={{
                            values,
                            touched,
                            formField,
                            errors,
                            handleBlur,
                          }}
                        />
                        <div className="mt-2 w-full flex justify-between">
                          <button
                            onClick={(e) => {
                              navigate("/dashe/facturasi");
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

export default NewFacturasi;
