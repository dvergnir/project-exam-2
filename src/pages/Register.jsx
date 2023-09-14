import { MainContainer } from "../components/layout/Main.styled";
import RegistrationForm from "../components/api/auth/registration/RegistrationForm";

export default function Register() {
  return (
    <MainContainer>
      <h1>Register account</h1>
      <RegistrationForm />
    </MainContainer>
  );
}