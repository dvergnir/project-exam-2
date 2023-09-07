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
  }

  .error {
    color: red;
    margin-top: 8px;
  }
`;
