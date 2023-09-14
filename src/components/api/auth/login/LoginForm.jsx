import React from "react";
import { Form } from "react-formal";
import { FormStyle } from "../../../utils/FormStyle";
import { StyledButton } from "../../../utils/StyledButton.styled";
import FormInput from "./FormInput";

const LoginForm = ({ initialValues, onSubmit, error }) => (
  <Form schema={loginSchema} defaultValue={initialValues} onSubmit={onSubmit}>
    {({ submitForm }) => (
      <FormStyle onSubmit={submitForm}>
        <h1>Sign in</h1>
        <FormInput name="email" label="Email" />
        <FormInput name="password" label="Password" type="password" />
        {error && <p className="error">{error}</p>}
        <div>
          <StyledButton type="submit">Login</StyledButton>
        </div>
      </FormStyle>
    )}
  </Form>
);

export default LoginForm;
