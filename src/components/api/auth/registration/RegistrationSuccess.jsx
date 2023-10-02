import React from "react";
import { Link } from "react-router-dom";
import { StyledRegistrationSuccess } from "./RegistrationSuccess.styled";
import { StyledButton } from "../../../utils/StyledButton.styled";

function RegistrationSuccess() {
  return (
    <StyledRegistrationSuccess>
      <p>Registration successful!</p>
      <p>You can now proceed to login</p>
      <Link to="/login">
        <StyledButton>Log in</StyledButton>
      </Link>
    </StyledRegistrationSuccess>
  );
}

export default RegistrationSuccess;
