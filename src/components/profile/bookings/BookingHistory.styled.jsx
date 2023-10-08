import styled from "styled-components";

const desktopBreakpoint = "999px";

export const BookingHistoryContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border-bottom: 1px solid var(--secondary-color);

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 400px;
`;

export const BookingHistoryH2 = styled.h2`
  text-align: left;
`;
