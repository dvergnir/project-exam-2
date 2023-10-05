import { StyledVenueCreationWrapper } from "./VenueCreationSuccess.styled";

function VenueCreationSuccess({ venueInfo }) {
  return (
    <div className="venue-creation-success">
      <h2 className="creation-success">Venue Created Successfully!</h2>
      <h4>Details of your new venue:</h4>
      <StyledVenueCreationWrapper>
        <p>Venue Name: {venueInfo.name}</p>
        <p>
          Location:{" "}
          {venueInfo.location.address && (
            <span>{venueInfo.location.address}, </span>
          )}
          {venueInfo.location.city && <span>{venueInfo.location.city}, </span>}
          {venueInfo.location.country && (
            <span>{venueInfo.location.country}</span>
          )}
        </p>
        <p>Maximum Guests: {venueInfo.maxGuests}</p>
        <p>Price per night: {venueInfo.price}</p>
      </StyledVenueCreationWrapper>
    </div>
  );
}

export default VenueCreationSuccess;
