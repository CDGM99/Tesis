import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreatePagoeMutation,
  useEditPagoeMutation,
  useLazyGetPagoeByIdQuery,
} from "../../services/PagoEServices";
import AddPagoe from "./components/pagoe.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewPagoe() {
  const [
    createPagoe,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreatePagoeMutation();
  const [
    editPagoe,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditPagoeMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getPagoeById, { data: pagoe }] = useLazyGetPagoeByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createPagoe(values);
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        if (Object.keys(modifiedFields).length !== 0) {
          await editPagoe({ id: id, ...modifiedFields });
        }
      }
      navigate("/dashe/pagoe");
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
              <h1 className="text-3xl font-bold">Pago a embajadores</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada al pago de los embajadores por agregar"
                : "Edite la información relacionada al pago de los embajadores"}
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
                  getPagoeById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(formField.name.name, res?.name, true);
                      setFieldValue(
                        formField.refered_number.name,
                        res?.refered_number,
                        true
                      );
                      setFieldValue(
                        formField.retribution_for_sales.name,
                        res?.retribution_for_sales,
                        true
                      );
                      setFieldValue(
                        formField.retribution_for_fortnight.name,
                        res?.retribution_for_fortnight,
                        true
                      );
                      setFieldValue(
                        formField.payment_date.name,
                        res?.payment_date,
                        true
                      );
                      setFieldValue(
                        formField.payment_status.name,
                        res?.payment_status,
                        true
                      );
                      setFieldValue(
                        formField.payment_method.name,
                        res?.payment_method,
                        true
                      );
                      setFieldValue(formField.paid.name, res?.paid, true);
                    });
                }
              }, [id]);

              return (
                <Form id={formId} autoComplete="off">
                  <div className="h-full">
                    <div className="p-3">
                      <div>
                        <AddPagoe
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
                              navigate("/dashe/pagoe");
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

export default NewPagoe;
