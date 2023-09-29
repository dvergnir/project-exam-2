import React from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../../form/FormInput";
import CheckboxInput from "./CheckboxInput";
import { FormStyle } from "../../../form/FormStyle.styled";
import { CtaStyledButton } from "../../../utils/StyledButton.styled";
import { StyledErrorMessage } from "../../../utils/ErrorMessage.styled";

function RegistrationFormContent({ onSubmit }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: "Name is required",
          pattern: {
            value: /^[a-zA-Z0-9_]+$/,
            message: "Name must only contain letters, numbers, and underscores",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="Name"
            type="text"
            id="name"
            {...field}
            error={
              errors.name && (
                <StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
              )
            }
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          pattern: {
            value: /^(?=.*@)(?=.*(stud\.noroff\.no))\S+$/,
            message: "Invalid email address. Must be @stud.noroff.no",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="Email"
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
            label="Password (min. 8 characters)"
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

      <Controller
        name="avatar"
        control={control}
        defaultValue=""
        rules={{
          pattern: {
            value: /^(http|https):\/\/\S+$/,
            message: "Invalid avatar URL",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="Avatar (optional)"
            type="text"
            id="avatar"
            {...field}
            error={
              errors.avatar && (
                <StyledErrorMessage>{errors.avatar.message}</StyledErrorMessage>
              )
            }
          />
        )}
      />

      <Controller
        name="venueManager"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <div>
            <CheckboxInput label="Venue Manager" id="venueManager" {...field} />
            {errors.venueManager && (
              <StyledErrorMessage>
                {errors.venueManager.message}
              </StyledErrorMessage>
            )}
          </div>
        )}
      />

      <CtaStyledButton type="submit">Register</CtaStyledButton>
    </FormStyle>
  );
}

export default RegistrationFormContent;
