import { FooterText, StyledFooter } from "./Footer.styled";

function Footer({ children }) {
  return (
    <StyledFooter>
      <FooterText>&copy; Benjamin Løndal 2023</FooterText>
    </StyledFooter>
  );
}

export default Footer;
