// LoginForm.js
import React from "react";
import { FormStyle } from "./LoginUser.styled";
import { StyledButton } from "../../../utils/StyledButton.styled";

const LoginForm = ({ formData, handleInputChange, handleSubmit, error }) => (
  <FormStyle onSubmit={handleSubmit}>
    <h1>Sign in</h1>

    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      required
    />

    {error && <p className="error">{error}</p>}
    <div>
      <StyledButton type="submit">Login</StyledButton>
    </div>
  </FormStyle>
);

export default LoginForm;
