import { MainContainer } from "../components/layout/Main.styled";
import VenueDetail from "../components/venues/VenueDetail";
import { Helmet } from "react-helmet-async";

export default function Venue() {
  return (
    <MainContainer>
      <Helmet>
        <title>Venue | Holidaze</title>
        <meta
          name="description"
          content="Choose between many different venues around the world"
        />
      </Helmet>
      <VenueDetail />
    </MainContainer>
  );
}
