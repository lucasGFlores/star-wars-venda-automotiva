import React, { FC } from "react";
import { FieldProps } from "formik";

interface CustomInputProps {
  type?: string;
  label: string;
}

const CustomInput: FC<CustomInputProps & FieldProps> = ({
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  type = "text",
  ...props
}) => (
  <>
    <label>{label}</label>
    <input type={type} {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <p className="error">{errors[field.name]?.toString()}</p>
    )}
  </>
);
export default CustomInput;