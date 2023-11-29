import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreateSalidaseMutation,
  useEditSalidaseMutation,
  useLazyGetSalidaseByIdQuery,
} from "../../services/SalidaseServices";
import AddSalidase from "./components/salidase.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewSalidase() {
  const [
    createSalidase,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreateSalidaseMutation();
  const [
    editSalidase,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditSalidaseMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getSalidaseById, { data: salidase }] = useLazyGetSalidaseByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createSalidase(values);
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        if (Object.keys(modifiedFields).length !== 0) {
          await editSalidase({ id: id, ...modifiedFields });
        }
      }
      navigate("/dashboard/salidase");
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
              <h1 className="text-3xl font-bold">Nueva salida especial</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada al la salida especial por agregar"
                : "Edite la información relacionada al la salida especial"}
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
                  getSalidaseById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(
                        formField.output_description.name,
                        res?.output_description,
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
                        <AddSalidase
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
                              navigate("/dashboard/salidase");
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

export default NewSalidase;
