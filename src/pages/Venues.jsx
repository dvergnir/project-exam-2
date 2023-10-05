import { MainContainer } from "../components/layout/Main.styled";
import VenueDetail from "../components/venues/VenueDetail";
import { Helmet } from "react-helmet-async";

export default function Venue() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Venue | Holidaze</title>
        <meta
          name="description"
          content="Choose between many different venues around the world"
        />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <VenueDetail />
    </MainContainer>
  );
}
