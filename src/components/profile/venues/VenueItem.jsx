import { CtaStyledButton, StyledButton } from "../../utils/StyledButton.styled";
import { UpcomingBookingImg } from "../bookings/UpcomingBookings.styled";
import {
  UserVenueButtonContainer,
  UserVenueWrapper,
  VenueBookingsWrapper,
  VenueBookingsText,
} from "./UserVenue.styled";
import deleteVenueApi from "../../api/auth/venuemanagement/deleteVenueApi";
import { Link } from "react-router-dom";

const VenueItem = ({ venue, onDelete }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this venue?"
    );

    if (confirmed) {
      try {
        const success = await deleteVenueApi(
          localStorage.getItem("accessToken"),
          venue.id
        );

        if (success) {
          onDelete(venue.id);
        } else {
          console.error("Failed to delete venue");
        }
      } catch (error) {
        console.error("Error occurred while deleting venue:", error);
      }
    }
  };

  function formatDate(date) {
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <>
      {" "}
      <UserVenueWrapper>
        <div className="venue-details">
          <div className="venue-info">
            <h3>{venue.name}</h3>
            <UpcomingBookingImg src={venue.media}></UpcomingBookingImg>
            {venue.location.city && venue.location.country && (
              <p>
                {venue.location.city}, {venue.location.country}
              </p>
            )}
          </div>
        </div>
        <div className="buttons-and-bookings">
          <UserVenueButtonContainer>
            <Link to={`/edit-venue/${venue.id}`}>
              <StyledButton>Edit</StyledButton>
            </Link>
            <CtaStyledButton onClick={handleDelete}>Delete</CtaStyledButton>
          </UserVenueButtonContainer>
        </div>
      </UserVenueWrapper>
      <VenueBookingsWrapper>
        <h3>Bookings</h3>
        {venue.bookings.map((booking, index) => (
          <div key={index} className="booking-date-element">
            <div className="date-from">
              <VenueBookingsText>
                From: {formatDate(new Date(booking.dateFrom))}
              </VenueBookingsText>
            </div>
            <div className="date-to">
              <VenueBookingsText>
                To: {formatDate(new Date(booking.dateTo))}
              </VenueBookingsText>
            </div>
          </div>
        ))}
      </VenueBookingsWrapper>
    </>
  );
};

export default VenueItem;
