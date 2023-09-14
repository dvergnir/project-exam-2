import React from "react";
import { Field } from "react-formal";

const FormInput = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest} />
      <div className="error">
        <Field.Message for={name} />
      </div>
    </div>
  );
};

export default FormInput;
