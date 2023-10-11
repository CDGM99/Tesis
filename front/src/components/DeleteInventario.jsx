import React, { useCallback, useState } from "react";
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

export default function Delete({ title, message, action, children }) {
  const execute = useCallback(() => {
    if (action) action();
  }, []);
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
            <RadioGroupItem value="venta" id="r1" />
            <Label htmlFor="r1">Venta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="salida interna" id="r2" />
            <Label htmlFor="r2">Salida interna</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="merma" id="r3" />
            <Label htmlFor="r3">Merma</Label>
          </div>
        </RadioGroup>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={execute}>Aceptar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

Delete.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
