import Logout from "../api/auth/login/Logout";
import { MenuContainer, MenuItem, CloseButton } from "./ProfileMenu.styled";
import { Link } from "react-router-dom";

const ProfileMenu = ({ onLogout, onClose }) => {
  return (
    <MenuContainer>
      <CloseButton onClick={onClose} className="profilemenu-link">
        X
      </CloseButton>
      <ul>
        <MenuItem>
          <Link to="/profile" className="profilemenu-link">
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Logout>
            <Link onClick={onLogout} className="profilemenu-link">
              Logout
            </Link>
          </Logout>
        </MenuItem>
      </ul>
    </MenuContainer>
  );
};

export default ProfileMenu;
