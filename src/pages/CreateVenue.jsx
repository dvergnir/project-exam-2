import CreateVenueForm from "../components/api/auth/venuemanagement/CreateVenueForm";
import { MainContainer } from "../components/layout/Main.styled";

export default function CreateVenue() {
  return (
    <MainContainer>
      <h1>Create Venue</h1>
      <CreateVenueForm />
    </MainContainer>
  );
}
