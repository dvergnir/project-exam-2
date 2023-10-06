import styled from "styled-components";

export const CtaStyledButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  background-color: var(--primary-color);
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 30px auto;
  font-size: 16px;

  &:hover {
    box-shadow: 0 0 10px var(--secondary-color);
  }
`;

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  background-color: var(--tertiary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  font-size: 16px;

  &:hover {
    box-shadow: 0 0 10px var(--tertiary-color);
  }
`;

export const StyledScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--primary-color);
  color: black;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

export const StyledChangeGuestsButton = styled.button`
  background-color: var(--secondary-color);
  padding: 5px;
  color: white;
  border-radius: 5px;
`;
