import { MainContainer } from "../components/layout/Main.styled";
import LoginUser from "../components/api/auth/login/LoginUser";

export default function Login() {
  return (
    <MainContainer>
      <LoginUser />
    </MainContainer>
  );
}
