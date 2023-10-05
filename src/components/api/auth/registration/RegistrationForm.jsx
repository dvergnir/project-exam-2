import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RegistrationFormContent from "./RegistrationFormContent";
import RegistrationSuccess from "./RegistrationSuccess";
import { REGISTER_URL } from "../../../../assets/constants";
import { StyledErrorMessage } from "../../../utils/ErrorMessage.styled";

function RegistrationForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const onSubmit = async (formData) => {
    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsRegistrationSuccessful(true); // Set registration success state
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.errors[0]?.message || "Unknown error";
        console.error("Account creation failed:", errorMessage);
        setRegistrationError(errorMessage);
      }
    } catch (error) {
      console.error("Error occurred while creating an account:", error);
      setRegistrationError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      {isRegistrationSuccessful ? (
        <RegistrationSuccess />
      ) : (
        <div>
          {registrationError && (
            <StyledErrorMessage className="error">
              {registrationError}
            </StyledErrorMessage>
          )}
          <RegistrationFormContent
            onSubmit={handleSubmit(onSubmit)}
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
