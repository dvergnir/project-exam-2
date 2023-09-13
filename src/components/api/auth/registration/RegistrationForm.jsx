import React, { useState } from "react";
import FormInput from "./FormInput";
import CheckboxInput from "./CheckboxInput";
import { validateForm } from "./RegistrationFormValidation";
import { FormStyle } from "../../../utils/FormStyle";
import { CtaStyledButton } from "../../../utils/StyledButton.styled";
import { REGISTER_URL } from "../../../../assets/constants";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    venueManager: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make an API request to create the account
        const response = await fetch(REGISTER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Request was successful, account was created
          console.log("Account created successfully!");
          // You can also redirect the user to a success page or perform other actions here
        } else {
          // Request was not successful
          console.error("Account creation failed.");
          // You can handle error cases, such as displaying an error message to the user
        }
      } catch (error) {
        console.error("Error occurred while creating an account:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
      />

      <FormInput
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
      />

      <FormInput
        label="Password (min. 8 characters)"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        error={errors.password}
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
        onChange={handleInputChange}
      />

      <CtaStyledButton type="submit">Register</CtaStyledButton>
    </FormStyle>
  );
}

export default RegistrationForm;
