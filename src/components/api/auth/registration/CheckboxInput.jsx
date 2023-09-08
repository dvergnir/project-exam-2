import React from "react";

function CheckboxInput({ label, id, name, checked, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckboxInput;
