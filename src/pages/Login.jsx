import { MainContainer } from "../components/layout/Main.styled";
import LoginUser from "../components/api/auth/login/LoginUser";
import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <MainContainer>
      <Helmet>
        <title>Log in | Holidaze</title>
        <meta name="description" content="Log in to book venues at Holidaze" />
      </Helmet>
      <LoginUser />
    </MainContainer>
  );
}
