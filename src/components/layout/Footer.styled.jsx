import styled from "styled-components";
import footerSm from "../../images/footersm.png";
import footerMd from "../../images/footermd.png";
import footerLg from "../../images/footerlg.png";

export const StyledFooter = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  background-image: url(${footerSm});
  background-size: cover;
  text-align: center;

  @media (min-width: 500px) {
    background-image: url(${footerMd});
  }

  @media (min-width: 1000px) {
    background-image: url(${footerLg});
  }
`;

export const FooterText = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 10px;
  color: white;
`;
