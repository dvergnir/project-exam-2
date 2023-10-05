import EditVenuePage from "../components/api/auth/venuemanagement/EditVenuePage";
import { MainContainer } from "../components/layout/Main.styled";

export default function EditVenue() {
  return (
    <MainContainer>
      <h1>Update your Venue</h1>
      <EditVenuePage />
    </MainContainer>
  );
}
