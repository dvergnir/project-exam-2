import { MainContainer } from "../components/layout/Main.styled";
import Venues from "../components/venues/Venues";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home | Holidaze</title>
        <meta
          name="description"
          content="Holidaze. Venues for your perfect adventures!"
        />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <Venues />
    </MainContainer>
  );
}
