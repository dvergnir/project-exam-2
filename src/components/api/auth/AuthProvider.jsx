import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );

  const updateAccessToken = (newToken) => {
    localStorage.setItem("accessToken", newToken);
    setAccessToken(newToken);
  };

  const clearAccessToken = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, updateAccessToken, clearAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
