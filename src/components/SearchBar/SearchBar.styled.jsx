import { styled } from "styled-components";

export const SearchBarWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 0 5px var(--secondary-color);
  width: 100%;

  position: relative;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px var(--secondary-color);
  }
`;

export const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
