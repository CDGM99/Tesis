import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import { useLazyGetProductosByIdQuery } from "../services/InventarioServices";

export default function DeleteInventario({
  title,
  message,
  action,
  children,
  id,
}) {
  const [getProductoById, { data: producto }] = useLazyGetProductosByIdQuery();

  // const execute = useCallback(() => {
  //   if (action) action();
  // }, []);

  const submitForm = async (values, actions) => {
    if (selectedValue === "salida especial") {
      const { description } = values;
      const productoAMover = { ...producto, description };
      console.log(productoAMover);
      console.log("sss", producto);
    } else {
      action();
    }
  };

  const [selectedValue, setSelectedValue] = useState("venta");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log("id", id);

  useEffect(() => {
    if (id) {
      getProductoById(id)
        .unwrap()
        .then((res) => {
          // console.log("sasas", res);
        });
    }
  }, [id]);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup defaultValue="venta">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="venta" id="r1" onClick={handleRadioChange} />
            <Label htmlFor="r1">Venta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="salida especial"
              id="r2"
              onClick={handleRadioChange}
            />
            <Label htmlFor="r2">Salida Especial</Label>
          </div>
          {/* <div className="flex items-center space-x-2">
            <RadioGroupItem value="merma" id="r3" onClick={handleRadioChange} />
            <Label htmlFor="r3">Merma</Label>
          </div> */}
        </RadioGroup>
        {/* {selectedValue === "merma" ? <h1>merma</h1> : ""} */}
        {selectedValue === "salida especial" ? (
          <Formik
            initialValues={{ description: "" }}
            validationSchema={Yup.object().shape({
              description: Yup.string().required("La descripción es requerida"),
            })}
            onSubmit={(values, { resetForm }) => {
              // Aquí puedes manejar la lógica de envío del formulario
              console.log("Valores del formulario:", values);
              // Limpia el formulario después de enviarlo
              resetForm();
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form>
                <div>
                  <FormField
                    type={"text"}
                    label={"Describa el motivo de la salida del producto"}
                    name={"description"}
                    value={values.description}
                    placeholder={"Descripción"}
                    onBlur={handleBlur}
                  />
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          ""
        )}

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setSelectedValue("")}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={submitForm}>Aceptar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

DeleteInventario.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
