import { MainContainer } from "../components/layout/Main.styled";
import RegistrationForm from "../components/api/auth/registration/RegistrationForm";
import { Helmet } from "react-helmet-async";

export default function Register() {
  return (
    <MainContainer>
      <Helmet>
        <title>Register | Holidaze</title>
        <meta name="description" content="Register at Holidaze" />
      </Helmet>
      <h1>Register account</h1>
      <RegistrationForm />
    </MainContainer>
  );
}
