import { MainContainer } from "../components/layout/Main.styled";
import BookingHistory from "../components/profile/bookings/BookingHistory";
import { Helmet } from "react-helmet-async";

export default function Bookings() {
  return (
    <MainContainer>
      <Helmet>
        <title>Booking History | Holidaze</title>
        <meta
          name="description"
          content="Your booking history here at Holidaze"
        />
      </Helmet>
      <BookingHistory />
    </MainContainer>
  );
}
