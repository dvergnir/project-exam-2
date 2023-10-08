import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../../../assets/constants";
import AuthContext from "../AuthProvider";
import LoginForm from "./LoginForm";
import RegistrationRoute from "./RegistrationRoute";

const LoginUser = () => {
  const { refreshAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

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
        const errorData = await response.json();

        if (errorData.errors && errorData.errors.length > 0) {
          const errorMessage = errorData.errors[0].message;
          console.log(errorMessage);
          throw new Error(errorMessage);
        } else {
          console.error("Error data received:", errorData);
          throw new Error("Unknown error occurred");
        }
      }

      const data = await response.json();

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("name", data.name);
      localStorage.setItem("venueManager", data.venueManager);

      refreshAuth();
      navigate("/");
    } catch (err) {
      console.error(err);
      setServerError(err.message);
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} serverError={serverError} />
      <NavLink to="/register">
        <RegistrationRoute />
      </NavLink>
    </>
  );
};

export default LoginUser;
