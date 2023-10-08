import styled from "styled-components";

export const HomeH1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
