import { MainContainer } from "../components/layout/Main.styled";
import CreateVenuePage from "../components/api/auth/venuemanagement/CreateVenuePage";

export default function CreateVenue() {
  return (
    <MainContainer>
      <h1>Create Venue</h1>
      <CreateVenuePage />
    </MainContainer>
  );
}
