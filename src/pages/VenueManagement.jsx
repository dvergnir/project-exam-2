import { MainContainer } from "../components/layout/Main.styled";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/utils/StyledButton.styled";
import UserVenueList from "../components/profile/venues/UserVenueList";

export default function VenueManagement() {
  return (
    <MainContainer>
      <h1>Venue Management</h1>
      <h2>My Venues</h2>
      <UserVenueList />
      <Link to="/create-venue">
        <StyledButton>Add Venue</StyledButton>
      </Link>
      <Link to="/profile" className="back-to-link">
        Back to Profile
      </Link>
    </MainContainer>
  );
}
