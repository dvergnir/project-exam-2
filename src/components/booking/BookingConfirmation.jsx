import React from "react";

function BookingConfirmation({ bookingInfo }) {
  return (
    <div className="booking-confirmation">
      <h3 className="booking-success">Booking Success!</h3>
      <h4>Your booking information:</h4>
      <p>Arrival Date: {new Date(bookingInfo.dateFrom).toLocaleDateString()}</p>
      <p>Departure Date: {new Date(bookingInfo.dateTo).toLocaleDateString()}</p>
      <p>Guests: {bookingInfo.guests}</p>
    </div>
  );
}

export default BookingConfirmation;
