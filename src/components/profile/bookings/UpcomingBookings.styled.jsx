import styled from "styled-components";

const desktopBreakpoint = "999px";

export const UpcomingBookingImg = styled.img`
  width: 100%
  max-width: 200px;
  height: 100px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

export const UpcomingBoookingsWrapper = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
    display: flex;
    margin: 0 auto:
    max-width: 900px;

    li {
      padding: 30px;
      width: 100%;
      flex: 1;
      display: flex;
    }
  }
`;
