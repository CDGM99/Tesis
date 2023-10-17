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
  const execute = useCallback((data) => {
    if (action) action(data);
  }, []);

  const submitForm = async (values, actions) => {
    if (selectedValue === "salida_interna" || selectedValue === "merma") {
      const { output_description } = values;
      execute({
        id,
        tipo: selectedValue,
        descripcion: output_description,
      });
    } else {
      execute({ id });
    }
  };

  const [selectedValue, setSelectedValue] = useState("venta");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
              value="salida_interna"
              id="r2"
              onClick={handleRadioChange}
            />
            <Label htmlFor="r2">Salida Interna</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="merma" id="r3" onClick={handleRadioChange} />
            <Label htmlFor="r3">Merma</Label>
          </div>
        </RadioGroup>

        {selectedValue === "salida_interna" || selectedValue === "merma" ? (
          <Formik
            initialValues={{ output_description: "" }}
            validationSchema={Yup.object().shape({
              output_description: Yup.string().required(
                "La descripción es requerida"
              ),
            })}
            onSubmit={submitForm}
          >
            {({ values, handleChange, handleBlur, isValid }) => (
              <Form>
                <div>
                  <FormField
                    type={"text"}
                    label={"Describa el motivo de la salida del producto"}
                    name={"output_description"}
                    value={values.output_description}
                    placeholder={"Descripción"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setSelectedValue("")}>
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction disabled={!isValid} type="submit">
                    Aceptar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </Form>
            )}
          </Formik>
        ) : (
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedValue("")}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={submitForm}>Aceptar</AlertDialogAction>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

DeleteInventario.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
