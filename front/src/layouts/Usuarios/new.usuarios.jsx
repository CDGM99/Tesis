import { Formik, Form } from "formik";
import validations from "./schemas/validations";
import form from "./schemas/form";
import { initialValues, initialValuesEdit } from "./schemas/initialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useCreateUsuariosMutation,
  useEditUsuariosMutation,
  useLazyGetUsuariosByIdQuery,
} from "../../services/Usuarios";
import AddAlmacen from "./components/usuarios.info";

const getModifiedFields = (originalData, newData) => {
  return Object.fromEntries(
    Object.entries(newData).filter(([key, value]) => {
      return originalData[key] !== value;
    })
  );
};

function NewUsuario() {
  const { id } = useParams();
  const [validation, setvalidation] = useState(validations[0]);
  const [currentInitialValues, setCurrentInitialValues] =
    useState(initialValues);

  useEffect(() => {
    if (id) {
      setvalidation(validations[1]);
      setCurrentInitialValues(initialValuesEdit);
    } else {
      setvalidation(validations[0]);
      setCurrentInitialValues(initialValues[0]);
    }
  }, [id]);

  const [
    createUsuario,
    {
      isSuccess: isSuccessC,
      isLoading: isLoadingC,
      isError: isErrorC,
      error: errorC,
    },
  ] = useCreateUsuariosMutation();
  const [
    editUsuario,
    {
      isSuccess: isSuccessE,
      isLoading: isLoadingE,
      isError: isErrorE,
      error: errorE,
    },
  ] = useEditUsuariosMutation();

  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [oldValues, setOldValues] = useState();
  const navigate = useNavigate();

  const [getUsuarioById, { data: usuario }] = useLazyGetUsuariosByIdQuery();
  const submitForm = async (values, actions) => {
    try {
      if (!id) {
        await createUsuario(values);
      } else {
        const { password, password1, ...rest } = values;
        const modifiedFields = getModifiedFields(oldValues, rest);
        if (Object.keys(modifiedFields).length !== 0) {
          await editUsuario({ id: id, ...modifiedFields });
        }
      }
      navigate("/usuarios");
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
              <h1 className="text-3xl font-bold">Nuevo usuario</h1>
            </div>
            <div className="text-xl font-normal text-black">
              {!id
                ? "Introduzca la información relacionada al usuario por agregar"
                : "Edite la información relacionada al usuario"}
            </div>
          </div>
          <Formik
            initialValues={currentInitialValues}
            validationSchema={validation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, setFieldValue, handleBlur }) => {
              useEffect(() => {
                if (id) {
                  getUsuarioById(id)
                    .unwrap()
                    .then((res) => {
                      setOldValues(res);
                      setFieldValue(formField.name.name, res?.name, true);
                      setFieldValue(
                        formField.apellidos.name,
                        res?.apellidos,
                        true
                      );
                      setFieldValue(formField.email.name, res?.email, true);
                      setFieldValue(formField.groups.name, res?.groups, true);
                    });
                }
              }, [id]);

              return (
                <Form id={formId} autoComplete="off">
                  <div className="h-full">
                    <div className="p-3">
                      <div>
                        <AddAlmacen
                          old={id}
                          formData={{
                            values,
                            touched,
                            formField,
                            errors,
                            handleBlur,
                            setFieldValue,
                            id,
                          }}
                        />
                        <div className="mt-2 w-full flex justify-between">
                          <button
                            onClick={(e) => {
                              navigate("/usuarios");
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

export default NewUsuario;
