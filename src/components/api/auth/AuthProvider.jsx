import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );

  const refreshAuth = () => {
    const token = localStorage.getItem("accessToken") || null;
    setAccessToken(token);
  };

  useEffect(() => {
    refreshAuth();
  }, []);

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
      value={{ accessToken, updateAccessToken, clearAccessToken, refreshAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
