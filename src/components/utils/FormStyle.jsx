import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: inset 0 0 5px var(--tertiary-color);
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: var(--secondary-color);
    }
  }

  .error {
    color: red;
    margin-top: 8px;
  }
`;
