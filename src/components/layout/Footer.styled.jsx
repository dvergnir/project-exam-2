import styled from "styled-components";
import footersm from "../../images/footerSm.jpg";
import footerMd from "../../images/footerMd.png";
import footerLg from "../../images/footerLg.png";

export const StyledFooter = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  background-image: url(${footersm});
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
