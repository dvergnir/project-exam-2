import React, { useState, useEffect } from "react";
import DateManager from "./DateManager";
import {
  CtaStyledButton,
  StyledChangeGuestsButton,
} from "../utils/StyledButton.styled";

import submitBooking from "../api/auth/booking/submitBooking";

const isDateInRange = (date, startDate, endDate) => {
  return date >= startDate && date <= endDate;
};

function BookingForm({
  maxGuests,
  price,
  onDatesChange,
  bookedDates,
  venueId,
  onBookingSuccess,
}) {
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [filteredRange, setFilteredRange] = useState([]);
  const [commonDates, setCommonDates] = useState([]);
  const [error, setError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleGuestsChange = (newGuests) => {
    if (newGuests >= 1 && newGuests <= maxGuests) {
      setGuests(newGuests);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault(); // Prevent form submission
    if (guests < maxGuests) {
      setGuests(guests + 1);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault(); // Prevent form submission
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleDatesChange = (arrival, departure) => {
    setArrivalDate(arrival);
    setDepartureDate(departure);

    if (arrival && departure) {
      const currentDate = new Date(arrival);
      const selectedRange = [];

      // Generate an array of all dates within the selected range
      while (currentDate <= departure) {
        selectedRange.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Find common dates between selectedRange and bookedDates
      const commonDates = selectedRange.filter((date) => {
        return bookedDates.some((booking) => {
          const bookingStartDate = new Date(booking.dateFrom);
          const bookingEndDate = new Date(booking.dateTo);
          return date >= bookingStartDate && date <= bookingEndDate;
        });
      });

      // Check if there are common dates and update the error message and button state
      if (commonDates.length > 0) {
        setError("Some dates are already booked.");
        setSubmitDisabled(true);
      } else {
        setError("");
        setSubmitDisabled(false);
      }
    } else {
      setTotalPrice(null);
      setFilteredRange([]); // Clear the filteredRange when no dates are selected.
      setError("");
      setSubmitDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // Call the submitBooking function with the bookingData
      const response = await submitBooking(bookingData);

      // Check the response and handle it accordingly
      if (response.success) {
        // Handle success, you can perform any actions you want here
        console.log("Booking successful!");
      } else {
        // Handle errors returned from the server, including a missing message property
        const errorMessage =
          response.message || "Booking failed with an unknown error.";
        console.error("Booking failed:", errorMessage);
      }

      // Call the onBookingSuccess callback with the booking data
      if (onBookingSuccess) {
        onBookingSuccess(bookingData);
      }

      setSubmitDisabled(false);
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error("Error submitting booking:", error);
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
          disabledDates={filteredRange}
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
        {commonDates.length > 0 ? (
          <p className="error-message">Some dates are already booked.</p>
        ) : (
          <CtaStyledButton type="submit" disabled={commonDates.length > 0}>
            Book Now
          </CtaStyledButton>
        )}
      </form>
    </div>
  );
}

export default BookingForm;
