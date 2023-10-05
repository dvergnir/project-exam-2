import { MainContainer } from "../components/layout/Main.styled";
import CreateVenuePage from "../components/api/auth/venuemanagement/CreateVenuePage";
import { Link } from "react-router-dom";

export default function CreateVenue() {
  return (
    <MainContainer>
      <h1>Create Venue</h1>
      <CreateVenuePage />
      <Link to="/venue-management" className="back-to-link">
        Back to Venue Management
      </Link>
    </MainContainer>
  );
}
