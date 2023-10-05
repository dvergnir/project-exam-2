import { MainContainer } from "../components/layout/Main.styled";
import CreateVenuePage from "../components/api/auth/venuemanagement/CreateVenuePage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CreateVenue() {
  return (
    <MainContainer>
      <Helmet>
        <title>Create Venue | Holidaze</title>
        <meta name="description" content="Add your venue to our website" />
      </Helmet>
      <h1>Create Venue</h1>
      <CreateVenuePage />
      <Link to="/venue-management" className="back-to-link">
        Back to Venue Management
      </Link>
    </MainContainer>
  );
}
