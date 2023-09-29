import React, { useState, useEffect } from "react";
import { MainContainer } from "../layout/Main.styled";
import { ProfileStyle, StyledAvatar } from "./UserProfile.styled";
import { StyledButton } from "../utils/StyledButton.styled";
import { getProfile } from "../api/auth/profile/getProfile";
import { updateUserAvatar } from "../api/auth/profile/updateUserAvatar";
import { Link } from "react-router-dom";
import Logout from "../api/auth/login/Logout";
import { useForm, Controller } from "react-hook-form";
import AvatarForm from "./AvatarForm";
import UpcomingBookings from "./bookings/UpcomingBookings";

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

  const { handleSubmit, control, reset, formState } = useForm();

  const handleUpdateAvatar = async (formData) => {
    try {
      const success = await updateUserAvatar(formData.newAvatarUrl);

      if (success) {
        const updatedProfileData = await getProfile();
        setUserProfile(updatedProfileData);
        setNewAvatarUrl("");
        reset();
        setError(null);
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
              <Link to="/profile/bookings" className="profile-link">
                Booking History
              </Link>
            </li>
            <li>
              <Link to="/venue-management" className="profile-link">
                Venue Management
              </Link>
            </li>
          </ul>
        </div>
      </ProfileStyle>
      <AvatarForm onSubmit={handleUpdateAvatar} />
      {error && <p className="error-message">{error}</p>} <UpcomingBookings />
      <Logout>
        <StyledButton className="logout-btn">Log out</StyledButton>
      </Logout>
    </MainContainer>
  );
};

export default UserProfile;
