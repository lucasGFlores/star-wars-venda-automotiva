import React, { FC } from "react";
import { FieldProps } from "formik";
import "../styles/Forms.css";
interface CustomInputProps {
  type?: string;
  label: string;
  event?: React.ChangeEvent<HTMLInputElement>
}

const CustomInput: FC<CustomInputProps & FieldProps> = ({
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  event,
  type = "text",
  ...props
}) => {

  return (
    <div>
      <label>{label}</label>
      <input
        
        type={type}
        {...field}
        {...props}
        className={touched[field.name] && errors[field.name] ? "error" : ""}
      />
      {touched[field.name] && errors[field.name] ? (
        <p style={{textAlign:"center"}} className="error">{errors[field.name]?.toString()}</p>
      ) : (
      ""
      )}
    </div>
  );
};
export default CustomInput;
