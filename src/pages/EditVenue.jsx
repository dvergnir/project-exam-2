import EditVenuePage from "../components/api/auth/venuemanagement/EditVenuePage";
import { MainContainer } from "../components/layout/Main.styled";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function EditVenue() {
  return (
    <MainContainer>
      <h1>Update your Venue</h1>
      <EditVenuePage />
      <Link to="/venue-management" className="back-to-link">
        Back to Venue Management
      </Link>
    </MainContainer>
  );
}
