import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  margin: 0px 20px !important;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  box-shadow: inset 0 0 5px var(--tertiary-color);


  &:checked {
    background-color: var(--tertiary-color);
  }
`;
