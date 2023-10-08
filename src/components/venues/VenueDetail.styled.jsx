import styled from "styled-components";

const desktopBreakpoint = "999px";
const tabletBreakpoint = "499px";

export const DetailVenueContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  position: relative;

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    text-align: left;
    font-size: 1.2em;
  }

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 800px;
    text-align: left;
    font-size: 1.2em;
  }
`;

export const ImageAndRatingContainer = styled.div`
  position: relative;
`;

export const DetailVenueImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: cover;

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    height: 300px;
  }

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 800px;
    margin: 0 auto;
    height: 400px;
  }
`;

export const DetailVenueIconsContainer = styled.div`
  display: flex;
  color: var(--secondary-color);
  font-size: 1.5rem;

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 800px;
  }
`;
