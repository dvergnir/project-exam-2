import styled from "styled-components";

export const UserVenueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .venue-details {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .venue-info {
    flex: 1;
    padding: 10px;
  }
`;

export const UserVenueButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VenueBookingsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VenueBookingsText = styled.p`
  margin: 0;
`;

export const BookingsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid var(--tertiary-color);
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 4px var(--secondary-color);
`;

export const MyVenuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 999px) {
    grid-template-columns: repeat(3, 1fr);
  }

  margin: 0 auto;
`;
