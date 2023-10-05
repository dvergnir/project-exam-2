import { MainContainer } from "../components/layout/Main.styled";
import CreateVenuePage from "../components/api/auth/venuemanagement/CreateVenuePage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CreateVenue() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Venue | Holidaze</title>
        <meta name="description" content="Add your venue to our website" />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <h1>Create Venue</h1>
      <CreateVenuePage />
      <Link to="/venue-management" className="back-to-link">
        Back to Venue Management
      </Link>
    </MainContainer>
  );
}
