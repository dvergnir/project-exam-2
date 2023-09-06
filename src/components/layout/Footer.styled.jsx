import styled from "styled-components";
import footersm from "../../images/footersm.jpg";

export const StyledFooter = styled.footer`
  display: flex; /* Use flexbox */
  flex-direction: column; /* Stack items vertically */
  justify-content: flex-end; /* Align items to the bottom */
  height: 200px;
  background-image: url(${footersm});
  background-size: cover;
  text-align: center;
`;

export const FooterText = styled.p`
  /* Add styles for your footer text here */
  color: white;
  margin: 0 auto 25px;
`;
