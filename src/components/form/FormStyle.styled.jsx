import styled from "styled-components";

const desktopBreakpoint = "999px";
const tabletBreakpoint = "499px";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  label {
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    max-width: 250px;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid var(--secondary-color);
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

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    margin: 0 auto;

    input {
      max-width: 450px;
    }
  }

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 800px;
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 500px) {
    justify-content: space-between; /* Reset vertical alignment for larger screens */
  }
`;

export const StyledCheckboxItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  font-size: 16px;
  box-shadow: inset 0 0 5px var(--tertiary-color);
  transition: border-color 0.3s, box-shadow 0.3s;

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    margin: 0 auto;

    input {
      max-width: 450px;
    }
  }

  &:focus {
    border-color: var(--secondary-color);
  }
`;
