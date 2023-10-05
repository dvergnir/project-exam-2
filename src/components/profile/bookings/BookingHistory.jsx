import { useEffect, useState } from "react";
import { fetchBookingsForProfile } from "../../api/auth/profile/userbookings/fetchBookingsForProfile";
import {
  BookingHistoryContainer,
  BookingHistoryH2,
} from "./BookingHistory.styled";
import { StyledButton } from "../../utils/StyledButton.styled";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Link } from "react-router-dom";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [visibleBookings, setVisibleBookings] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedBookings = await fetchBookingsForProfile();
        setBookings(fetchedBookings);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const loadMore = () => {
    const newVisibleBookings = visibleBookings + 5;
    setVisibleBookings(newVisibleBookings);
  };

  const displayedBookings = bookings.slice(0, visibleBookings);

  return (
    <div>
      <h1>Booking History</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {displayedBookings.map((booking) => (
            <li key={booking.id}>
              <BookingHistoryContainer>
                <BookingHistoryH2>{booking.venue.name}</BookingHistoryH2>
                <p>From: {formatDate(booking.dateFrom)}</p>
                <p>To: {formatDate(booking.dateTo)}</p>
                <p>Guests: {booking.guests}</p>
              </BookingHistoryContainer>
            </li>
          ))}
        </ul>
      )}
      {visibleBookings < bookings.length && (
        <StyledButton onClick={loadMore}>Load More</StyledButton>
      )}
      <Link to="/profile" className="back-to-link">
        Back to Profile
      </Link>
    </div>
  );
};

export default BookingHistory;
