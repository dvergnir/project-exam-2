import React from "react";
import FormInput from "./FormInput";
import CheckboxInput from "./CheckboxInput";
import { FormStyle } from "../../../utils/FormStyle.styled";
import { CtaStyledButton } from "../../../utils/StyledButton.styled";

function RegistrationFormContent({
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleSubmit,
}) {
  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <FormInput
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <FormInput
        label="Password (min. 8 characters)"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <FormInput
        label="Avatar (optional)"
        type="text"
        id="avatar"
        name="avatar"
        value={formData.avatar}
        onChange={handleInputChange}
      />

      <CheckboxInput
        label="Venue Manager"
        id="venueManager"
        name="venueManager"
        checked={formData.venueManager}
        onChange={handleCheckboxChange}
      />

      <CtaStyledButton type="submit">Register</CtaStyledButton>
    </FormStyle>
  );
}

export default RegistrationFormContent;
