import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthProvider";

function Logout({ children }) {
  const navigate = useNavigate();
  const { refreshAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.clear();

    refreshAuth();
    navigate("/login");
  };

  return <div onClick={handleLogout}>{children}</div>;
}

export default Logout;
