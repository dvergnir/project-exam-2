import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Header({ children }) {
  return (
    <StyledHeader>
      <div className="logo"> {children}</div>
      <NavLink>
        <FontAwesomeIcon icon={faUser} className="userIcon" />
      </NavLink>
      <p className="logotext">Holidaze</p>
    </StyledHeader>
  );
}

export default Header;
