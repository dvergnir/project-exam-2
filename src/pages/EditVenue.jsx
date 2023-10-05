import EditVenuePage from "../components/api/auth/venuemanagement/EditVenuePage";
import { MainContainer } from "../components/layout/Main.styled";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function EditVenue() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Venue | Holidaze</title>
        <meta name="description" content="Edit your venue on our website" />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <h1>Update your Venue</h1>
      <EditVenuePage />
      <Link to="/venue-management" className="back-to-link">
        Back to Venue Management
      </Link>
    </MainContainer>
  );
}
