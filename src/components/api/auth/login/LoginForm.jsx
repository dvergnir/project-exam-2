import React from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../../form/FormInput";
import { FormStyle } from "../../../form/FormStyle.styled";
import { StyledButton } from "../../../utils/StyledButton.styled";
import { StyledErrorMessage } from "../../../utils/ErrorMessage.styled";

const LoginForm = ({ onSubmit, serverError }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)} $error={serverError}>
      <h1>Sign in</h1>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="Email:"
            type="email"
            id="email"
            {...field}
            error={
              errors.email && (
                <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
              )
            }
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="Password:"
            type="password"
            id="password"
            {...field}
            error={
              errors.password && (
                <StyledErrorMessage>
                  {errors.password.message}
                </StyledErrorMessage>
              )
            }
          />
        )}
      />
      {serverError && <StyledErrorMessage>{serverError}</StyledErrorMessage>}{" "}
      <div>
        <StyledButton type="submit">Login</StyledButton>
      </div>
    </FormStyle>
  );
};

export default LoginForm;
