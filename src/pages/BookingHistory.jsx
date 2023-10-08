import { MainContainer } from "../components/layout/Main.styled";
import BookingHistory from "../components/profile/bookings/BookingHistory";
import { Helmet } from "react-helmet-async";

export default function Bookings() {
  return (
    <MainContainer>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Booking History | Holidaze</title>
        <meta
          name="description"
          content="Your booking history here at Holidaze"
        />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <BookingHistory />
    </MainContainer>
  );
}
