import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  CtaStyledButton,
  StyledChangeGuestsButton,
} from "../utils/StyledButton.styled";
import submitBooking from "../api/auth/booking/submitBooking";
import DateManager from "./DateManager";

function BookingForm({
  maxGuests,
  price,
  bookedDates,
  venueId,
  onBookingSuccess,
}) {
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [error, setError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleGuestsChange = (newGuests) => {
    if (newGuests >= 1 && newGuests <= maxGuests) {
      setGuests(newGuests);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    if (guests < maxGuests) {
      setGuests(guests + 1);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleDatesChange = (arrival, departure) => {
    setArrivalDate(arrival);
    setDepartureDate(departure);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!arrivalDate || !departureDate) {
      setError("Please select both arrival and departure dates.");
      return;
    }

    setSubmitDisabled(true);

    const formattedArrivalDate = arrivalDate.toISOString();
    const formattedDepartureDate = departureDate.toISOString();

    const bookingData = {
      dateFrom: formattedArrivalDate,
      dateTo: formattedDepartureDate,
      guests: guests,
      venueId: venueId,
    };

    try {
      const response = await submitBooking(bookingData);

      if (response.success) {
        console.log("Booking successful!");

        setTotalPrice(numberOfDays * price);

        setError("");
      } else {
        const errorMessage =
          response.message || "Booking failed with an unknown error.";
        console.error("Booking failed:", errorMessage);

        setError(errorMessage);
      }

      if (onBookingSuccess) {
        onBookingSuccess(bookingData);
      }

      setSubmitDisabled(false);
    } catch (error) {
      console.error("Error submitting booking:", error);

      setError(
        "An error occurred while submitting the booking. Please try again later."
      );

      setSubmitDisabled(false);
    }
  };

  useEffect(() => {
    if (arrivalDate && departureDate) {
      const oneDay = 24 * 60 * 60 * 1000;
      const startDate = new Date(arrivalDate);
      const endDate = new Date(departureDate);
      const numberOfDays = Math.round(Math.abs((startDate - endDate) / oneDay));
      const newTotalPrice = numberOfDays * price;
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(null);
    }
  }, [arrivalDate, departureDate, price]);

  return (
    <div>
      <h4 id="datepicker-heading">When would you like to visit?</h4>
      <form onSubmit={handleSubmit}>
        <DateManager
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          onDatesChange={handleDatesChange}
          bookedDates={bookedDates}
        />
        <div className="guests-container">
          <label htmlFor="guests">Number of Guests:</label>
          <div className="guests-input-container">
            <StyledChangeGuestsButton
              className="decrement-button"
              onClick={handleDecrement}
            >
              -
            </StyledChangeGuestsButton>
            <input
              className="guests-input"
              type="number"
              id="guests"
              name="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value, 10))}
              min="1"
              max={maxGuests}
            />
            <StyledChangeGuestsButton
              className="increment-button"
              onClick={handleIncrement}
            >
              +
            </StyledChangeGuestsButton>
          </div>
        </div>
        {arrivalDate && departureDate && <h4>Total Price: {totalPrice} NOK</h4>}
        {error && <p className="error-message">{error}</p>}
        <CtaStyledButton type="submit" disabled={submitDisabled}>
          Book Now
        </CtaStyledButton>
      </form>
    </div>
  );
}

export default BookingForm;
