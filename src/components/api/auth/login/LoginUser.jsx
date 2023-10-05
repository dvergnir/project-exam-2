import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../../../assets/constants";
import AuthContext from "../AuthProvider";
import LoginForm from "./LoginForm";
import RegistrationRoute from "./RegistrationRoute"; // Import the RegistrationRoute component

const LoginUser = () => {
  const { refreshAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
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
      localStorage.setItem("venueManager", data.venueManager);

      refreshAuth();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
      <NavLink to="/register">
        <RegistrationRoute />
      </NavLink>
    </>
  );
};

export default LoginUser;
