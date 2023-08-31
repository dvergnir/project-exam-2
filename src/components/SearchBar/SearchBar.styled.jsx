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
