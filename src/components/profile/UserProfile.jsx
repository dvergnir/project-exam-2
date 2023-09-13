import React, { useState, useEffect } from "react";
import { MainContainer } from "../layout/Main.styled";
import {
  AvatarFormStyle,
  ProfileStyle,
  StyledAvatar,
  StyledLogoutBtn,
  UploadAvatarStyle,
} from "./UserProfile.styled";
import { StyledButton } from "../utils/StyledButton.styled";
import { getProfile } from "../api/auth/profile/getProfile";
import { updateAvatar } from "../api/auth/profile/UpdateAvatar";
import { Link } from "react-router-dom";
import Logout from "../api/auth/login/Logout";

const placeHolderImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profileData = await getProfile();
        setUserProfile(profileData);
      } catch (error) {
        setError("Failed to fetch user profile");
      }
    }

    fetchProfile();
  }, []);

  const handleImageError = (e) => {
    e.target.src = placeHolderImageUrl;
  };

  const handleUpdateAvatar = async () => {
    console.log("HI");
    try {
      const success = await updateAvatar(newAvatarUrl);

      if (success) {
        const updatedProfileData = await getProfile();
        setUserProfile(updatedProfileData);
        setNewAvatarUrl("");
      } else {
        setError("Failed to update avatar");
      }
    } catch (error) {
      setError("Failed to update avatar");
    }
  };

  return (
    <MainContainer className="profile">
      <ProfileStyle>
        <div className="profile-avatar">
          <StyledAvatar
            src={userProfile.avatar}
            alt="User Avatar"
            onError={handleImageError}
          />
        </div>
        <div className="profile-info">
          <h2>{userProfile.name}</h2>
          <ul>
            <li>
              <Link to="/my-reservations" className="profile-link">
                My Reservations
              </Link>
            </li>
            <li>
              <Link to="/my-venues" className="profile-link">
                My Venues
              </Link>
            </li>
          </ul>
        </div>
      </ProfileStyle>
      <AvatarFormStyle>
        <UploadAvatarStyle className="update-avatar-form">
          <input
            type="text"
            placeholder="Enter New Avatar URL"
            value={newAvatarUrl}
            onChange={(e) => setNewAvatarUrl(e.target.value)}
          />
          <StyledButton type="button" onClick={handleUpdateAvatar}>
            Update Avatar
          </StyledButton>
        </UploadAvatarStyle>
      </AvatarFormStyle>
      {error && <p>{error}</p>}
      <Logout>
        <StyledLogoutBtn className="logout-btn">Log out</StyledLogoutBtn>
      </Logout>
    </MainContainer>
  );
};

export default UserProfile;
