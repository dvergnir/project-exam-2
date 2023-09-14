import React from "react";

function FormInput({ label, type, id, name, value, onChange, error }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </>
  );
}

export default FormInput;
