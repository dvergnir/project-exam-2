import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logout from "../api/auth/login/Logout";
import AuthContext from "../api/auth/AuthProvider";

function Header({ children }) {
  // Access the accessToken state from the AuthContext
  const { accessToken } = useContext(AuthContext);

  return (
    <StyledHeader>
      <NavLink to="/">
        <div className="logo"> {children}</div>
      </NavLink>

      {accessToken ? (
        <div>
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} className="userIcon" />
          </NavLink>
          <Logout>
            <span>Log out</span>
          </Logout>
        </div>
      ) : (
        <div>
          <NavLink to="/login">
            <FontAwesomeIcon icon={faUser} className="userIcon" />
            <span>Log in</span>
          </NavLink>
        </div>
      )}
      <p className="logotext">Holidaze</p>
    </StyledHeader>
  );
}

export default Header;
