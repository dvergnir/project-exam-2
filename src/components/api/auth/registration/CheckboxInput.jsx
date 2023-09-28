import React from "react";
import { StyledCheckbox } from "./CheckboxInput.styled";

const CheckboxInput = React.forwardRef(
  ({ label, id, name, checked, onChange }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <StyledCheckbox
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default CheckboxInput;
