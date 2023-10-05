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
  console.log(venue);
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
    <UserVenueWrapper>
      <div>
        <h3>{venue.name}</h3>
        <UpcomingBookingImg src={venue.media}></UpcomingBookingImg>
        {venue.location.city && venue.location.country && (
          <p>
            {venue.location.city}, {venue.location.country}
          </p>
        )}
        <h3>Bookings</h3>
        <VenueBookingsWrapper>
          {venue.bookings.map((booking, index) => (
            <div key={index} className="date-element">
              <VenueBookingsText>
                From: {formatDate(new Date(booking.dateFrom))}
              </VenueBookingsText>{" "}
              <VenueBookingsText>
                To: {formatDate(new Date(booking.dateTo))}
              </VenueBookingsText>
            </div>
          ))}
        </VenueBookingsWrapper>
      </div>
      <UserVenueButtonContainer>
        <Link to={`/edit-venue/${venue.id}`}>
          <StyledButton>Edit</StyledButton>
        </Link>
        <CtaStyledButton onClick={handleDelete}>Delete</CtaStyledButton>
      </UserVenueButtonContainer>
    </UserVenueWrapper>
  );
};

export default VenueItem;
