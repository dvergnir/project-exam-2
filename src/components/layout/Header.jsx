import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileIconContainer, StyledHeader } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../api/auth/AuthProvider";

function Header({ children }) {
  const { accessToken } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(accessToken !== null);

  useEffect(() => {
    setLoggedIn(accessToken !== null);
  }, [accessToken]);

  return (
    <StyledHeader>
      <NavLink to="/">
        <div className="logo"> {children}</div>
      </NavLink>

      {loggedIn ? (
        <ProfileIconContainer>
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} className="userIcon" />
          </NavLink>
        </ProfileIconContainer>
      ) : (
        <div>
          <NavLink to="/login">
            <p className="login-link">Log in</p>
          </NavLink>
        </div>
      )}
      <p className="logotext">Holidaze</p>
    </StyledHeader>
  );
}

export default Header;
