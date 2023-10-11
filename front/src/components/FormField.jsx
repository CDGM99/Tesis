import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import { Input } from "../components/ui/input";
import { DgtTypography } from "../components/ui/dgt-typography";
import { Select } from "../components/ui/select";
import { cn } from "../lib/utils";
// import { useEffect, useState } from "react";
import { Label } from "../components/ui/label";

function FormField({
  label,
  name,
  select,
  success,
  error,
  children,
  className,
  ...rest
}) {
  const Comp = select ? Select : Input;

  return (
    <div className="flex flex-col gap-1 w-full p-1">
      <Label htmlFor={name} className="text-sm font-medium text-gray-600 pl-2">
        {label}
      </Label>
      <Field
        {...rest}
        id={name}
        name={name}
        className={cn("", className)}
        as={Comp}
      >
        {children}
      </Field>
      <div className="px-3">
        <DgtTypography size="comment" variant="strong" color="error">
          <ErrorMessage name={name} />
        </DgtTypography>
      </div>
    </div>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  select: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
