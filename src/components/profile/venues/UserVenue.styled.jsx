import styled from "styled-components";

export const UserVenueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .venue-details {
    flex: 1; /* Occupy remaining space */
    display: flex;
    align-items: center;
  }

  .venue-info {
    flex: 1;
    padding: 10px;
  }

  .booking-date-element {
    margin-bottom: 5px;
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
`;
