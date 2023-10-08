import React from "react";

const FormInput = React.forwardRef(
  ({ label, type, id, name, value, onChange, error }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          ref={ref}
        />
        {error && <span>{error}</span>}
      </>
    );
  }
);

export default FormInput;
