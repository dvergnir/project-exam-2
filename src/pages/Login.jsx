import { MainContainer } from "../components/layout/Main.styled";
import LoginUser from "../components/api/auth/login/LoginUser";
import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Log in | Holidaze</title>
        <meta name="description" content="Log in to book venues at Holidaze" />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <LoginUser />
    </MainContainer>
  );
}
