import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the entire localStorage
    localStorage.clear();

    // Redirect to the login page
    navigate("/login");
  };

  return <div onClick={handleLogout}>{children}</div>;
}

export default Logout;
