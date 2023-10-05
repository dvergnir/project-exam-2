import { MainContainer } from "../components/layout/Main.styled";
import RegistrationForm from "../components/api/auth/registration/RegistrationForm";
import { Helmet } from "react-helmet-async";

export default function Register() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register | Holidaze</title>
        <meta name="description" content="Register at Holidaze" />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <h1>Register account</h1>
      <RegistrationForm />
    </MainContainer>
  );
}
