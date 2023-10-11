import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreatePagopMutation,
  useEditPagopMutation,
  useLazyGetPagopByIdQuery,
} from "../../services/PagoPServices";
import AddPagop from "./components/pagop.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewPagop() {
  const [
    createPagop,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreatePagopMutation();
  const [
    editPagop,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditPagopMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getPagopById, { data: pagop }] = useLazyGetPagopByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createPagop(values);
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        if (Object.keys(modifiedFields).length !== 0) {
          await editPagop({ id: id, ...modifiedFields });
        }
      }
      navigate("/dashe/pagop");
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
              <h1 className="text-3xl font-bold">Pago a proveedores</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada al pago de los proveedores por agregar"
                : "Edite la información relacionada al pago de los proveedores"}
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
                  getPagopById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(formField.name.name, res?.name, true);
                      setFieldValue(formField.code.name, res?.code, true);
                      setFieldValue(formField.nit.name, res?.nit, true);
                      setFieldValue(
                        formField.contract.name,
                        res?.contract,
                        true
                      );
                      setFieldValue(formField.account.name, res?.account, true);
                      setFieldValue(formField.address.name, res?.address, true);
                      setFieldValue(formField.paid.name, res?.paid, true);
                    });
                }
              }, [id]);

              return (
                <Form id={formId} autoComplete="off">
                  <div className="h-full">
                    <div className="p-3">
                      <div>
                        <AddPagop
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
                              navigate("/dashe/pagop");
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

export default NewPagop;
