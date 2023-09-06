import styled from "styled-components";

export const VenueCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 2px 4px var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 500px;
    margin: 0px;
    box-shadow: 0 0 0;
    border-bottom: 1px solid var(--secondary-color);
  }
`;

export const VenueImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const RatingSquare = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
  max-width: 25px;
  text-align: center;
`;

export const VenueName = styled.h2`
  margin: 10px 10px 0px 10px;
  padding: 10px 10px 0px 10px;
  color: var(--secondary-color);
`;

export const VenueCity = styled.h3`
  margin: 0;
  padding: 10px;
  color: var(--secondary-color);
`;

export const ViewVenueButton = styled.button`
  background-color: var(--tertiary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px;
  font-size: 16px;
`;
