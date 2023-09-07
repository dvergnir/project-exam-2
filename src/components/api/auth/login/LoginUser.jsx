import React, { useState } from "react";
import LoginForm from "./Loginform";
import RegistrationLink from "./RegistrationLink";

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Store the access token in local storage for later use
      localStorage.setItem("accessToken", data.accessToken);

      // Update the state with the access token
      setAccessToken(data.accessToken);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return false;
    }

    // You can add more specific validation checks here for email format, password strength, etc.

    setError(null);
    return true;
  };

  return (
    <>
      {accessToken ? (
        <div>{/* Logged-in content */}</div>
      ) : (
        <>
          <LoginForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            error={error}
          />
          <RegistrationLink />
        </>
      )}
    </>
  );
};

export default LoginUser;
