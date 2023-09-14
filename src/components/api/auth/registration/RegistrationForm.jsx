import React, { useState } from "react";
import RegistrationFormContent from "./RegistrationFormContent";
import RegistrationSuccess from "./RegistrationSuccess";
import { REGISTER_URL } from "../../../../assets/constants";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    venueManager: false,
  });

  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setRegistrationSuccessful(true);
      } else {
        console.error("Account creation failed.");
      }
    } catch (error) {
      console.error("Error occurred while creating an account:", error);
    }
  };

  return (
    <div>
      {isRegistrationSuccessful ? (
        <RegistrationSuccess />
      ) : (
        <RegistrationFormContent
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default RegistrationForm;
