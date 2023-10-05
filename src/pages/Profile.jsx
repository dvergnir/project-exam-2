import { MainContainer } from "../components/layout/Main.styled";
import UserProfile from "../components/profile/UserProfile";
import { Helmet } from "react-helmet-async";

export default function Profile() {
  return (
    <MainContainer>
      <Helmet>
        <title>Profile | Holidaze</title>
        <meta name="description" content="Your Holidaze profile" />
      </Helmet>
      <h1>Profile</h1>
      <UserProfile />
    </MainContainer>
  );
}
