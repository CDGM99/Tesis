import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreateAlmacenesMutation,
  useEditAlmacenesMutation,
  useLazyGetAlmacenesByIdQuery,
} from "../../services/AlmacenServices";
import AddAlmacen from "./components/almacen.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewAlmacen() {
  const [
    createAlmacen,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreateAlmacenesMutation();
  const [
    editAlmacen,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditAlmacenesMutation();

  const { id } = useParams();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getAlmacenById, { data: almacen }] = useLazyGetAlmacenesByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createAlmacen(values);
      } else {
        const modifiedFields = getModifiedFields(oldValues, values);
        if (Object.keys(modifiedFields).length !== 0) {
          await editAlmacen({ id: id, ...modifiedFields });
        }
      }
      navigate("/dashboard/almacenes");
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
              <h1 className="text-3xl font-bold">Nuevo almacen</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada al almacen por agregar"
                : "Edite la información relacionada al almacen"}
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
                  getAlmacenById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(formField.name.name, res?.name, true);
                      setFieldValue(
                        formField.geolocalizacion.name,
                        res?.geolocalizacion,
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
                        <AddAlmacen
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
                              navigate("/dashboard/almacenes");
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

export default NewAlmacen;
