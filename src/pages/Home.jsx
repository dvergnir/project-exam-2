import { MainContainer } from "../components/layout/Main.styled";
import Venues from "../components/venues/Venues";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <MainContainer>
      <Helmet>
        <title>Home | Holidaze</title>
        <meta
          name="description"
          content="Holidaze. Venues for your perfect adventures!"
        />
      </Helmet>
      <Venues />
    </MainContainer>
  );
}
