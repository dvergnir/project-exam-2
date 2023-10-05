import { useEffect, useState } from "react";
import { fetchBookingsForProfile } from "../../api/auth/profile/userbookings/fetchBookingsForProfile";
import {
  BookingHistoryContainer,
  BookingHistoryH2,
} from "./BookingHistory.styled";
import { UpcomingBookingImg } from "./UpcomingBookings.styled";

const UpcomingBookings = () => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    async function fetchUpcomingBookings() {
      try {
        const fetchedBookings = await fetchBookingsForProfile();
        const currentDate = new Date();
        const upcoming = fetchedBookings.filter(
          (booking) => new Date(booking.dateTo) >= currentDate
        );
        setUpcomingBookings(upcoming);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUpcomingBookings();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const limitedUpcomingBookings = upcomingBookings.slice(0, 3);

  return (
    <div>
      <h2>Upcoming Bookings</h2>
      <ul>
        {limitedUpcomingBookings.map((booking) => (
          <li key={booking.id}>
            <BookingHistoryContainer>
              <BookingHistoryH2>{booking.venue.name}</BookingHistoryH2>
              <UpcomingBookingImg
                src={booking.venue.media}
              ></UpcomingBookingImg>
              <p>From: {formatDate(booking.dateFrom)}</p>
              <p>To: {formatDate(booking.dateTo)}</p>
              <p>Guests: {booking.guests}</p>
            </BookingHistoryContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingBookings;
