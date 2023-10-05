import React, { useState, useEffect } from "react";
import { MainContainer } from "../layout/Main.styled";
import {
  ProfileStyle,
  StyledAvatar,
  StyledProfileMenu,
  UserProfileSection,
} from "./UserProfile.styled";
import { getProfile } from "../api/auth/profile/getProfile";
import { updateUserAvatar } from "../api/auth/profile/updateUserAvatar";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import AvatarForm from "./AvatarForm";
import UpcomingBookings from "./bookings/UpcomingBookings";
import LoadingSpinner from "../utils/LoadingSpinner"; // Import your loading spinner component

const placeHolderImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profileData = await getProfile();
        setUserProfile(profileData);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError("Failed to fetch user profile");
        setIsLoading(false); // Set loading to false in case of an error
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

  const isVenueManagementEnabled =
    localStorage.getItem("venueManager") === "true";

  return (
    <MainContainer className="profile">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ProfileStyle>
            <UserProfileSection>
              <div className="profile-avatar">
                <StyledAvatar
                  src={userProfile.avatar}
                  alt="User Avatar"
                  onError={handleImageError}
                />
              </div>
              <div className="profile-info">
                <h2>{userProfile.name}</h2>
              </div>
            </UserProfileSection>
            <StyledProfileMenu>
              <ul>
                <li>
                  <Link to="/profile/booking-history" className="link">
                    Booking History
                  </Link>
                </li>
                {isVenueManagementEnabled && (
                  <li>
                    <Link to="/venue-management" className="link">
                      Venue Management
                    </Link>
                  </li>
                )}
              </ul>
            </StyledProfileMenu>
          </ProfileStyle>

          <AvatarForm onSubmit={handleUpdateAvatar} />
          {error && <p className="error-message">{error}</p>}
          <UpcomingBookings />
        </>
      )}
    </MainContainer>
  );
};

export default UserProfile;
