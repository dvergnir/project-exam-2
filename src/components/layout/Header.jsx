import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileIconContainer, StyledHeader } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../api/auth/AuthProvider";
import ProfileMenu from "./ProfileMenu";

function Header({ children }) {
  const { accessToken, logout } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(accessToken !== null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setLoggedIn(accessToken !== null);
  }, [accessToken]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledHeader>
      <NavLink to="/">
        <div className="logo"> {children}</div>
      </NavLink>

      {loggedIn ? (
        <ProfileIconContainer>
          <FontAwesomeIcon
            icon={faUser}
            className="userIcon"
            onClick={handleMenuToggle}
          />
          {isMenuOpen && <ProfileMenu onClose={handleCloseMenu} />}
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
