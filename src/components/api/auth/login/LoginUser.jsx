import React, { useState, useContext } from "react";
import LoginForm from "./Loginform";
import RegistrationRoute from "./RegistrationRoute";
import { NavLink } from "react-router-dom";
import { LOGIN_URL } from "../../../../assets/constants";
import AuthContext from "../AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { refreshAuth } = useContext(AuthContext);

  const navigate = useNavigate();
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
      const response = await fetch(LOGIN_URL, {
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

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("name", data.name);

      refreshAuth();
      navigate("/");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return false;
    }

    setError(null);
    return true;
  };

  return (
    <>
      <LoginForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        error={error}
      />
      <NavLink to="/register">
        <RegistrationRoute />
      </NavLink>
    </>
  );
};

export default LoginUser;
