import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 10px;
  margin: 0 auto;

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
