import React from "react";
import { useForm } from "react-hook-form";
import RegistrationFormContent from "./RegistrationFormContent";
import RegistrationSuccess from "./RegistrationSuccess";
import { REGISTER_URL } from "../../../../assets/constants";

function RegistrationForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

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
        // Handle successful form submission here
      } else {
        console.error("Account creation failed.");
      }
    } catch (error) {
      console.error("Error occurred while creating an account:", error);
    }
  };

  return (
    <div>
      {isSubmitSuccessful ? (
        <RegistrationSuccess />
      ) : (
        <RegistrationFormContent
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default RegistrationForm;
