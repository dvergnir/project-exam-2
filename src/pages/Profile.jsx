import { MainContainer } from "../components/layout/Main.styled";
import UserProfile from "../components/profile/UserProfile";
import { Helmet } from "react-helmet-async";

export default function Profile() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile | Holidaze</title>
        <meta name="description" content="Your Holidaze profile" />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <h1>Profile</h1>
      <UserProfile />
    </MainContainer>
  );
}
