import { MainContainer } from "../components/layout/Main.styled";
import { Link } from "react-router-dom";
import { StyledButton } from "../components/utils/StyledButton.styled";
import UserVenueList from "../components/profile/venues/UserVenueList";
import { Helmet } from "react-helmet-async";

export default function VenueManagement() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Venue Management | Holidaze</title>
        <meta
          name="description"
          content="Manage your venues here at Holidaze"
        />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
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
