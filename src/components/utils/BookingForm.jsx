import React, { useState, useEffect } from "react";
import DateManager from "../utils/DateManager";
import { CtaStyledButton } from "./StyledButton.styled";

function BookingForm({ maxGuests, price, onDatesChange }) {
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  const handleGuestsChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= maxGuests) {
      setGuests(inputValue);
    }
  };

  const handleDatesChange = (arrival, departure) => {
    setArrivalDate(arrival);
    setDepartureDate(departure);

    if (arrival && departure < arrival) {
      setDepartureDate(arrival);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Guests:", guests);
    console.log("Arrival Date:", arrivalDate);
    console.log("Departure Date:", departureDate);
    console.log("Total Price:", totalPrice);
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
      <h3 id="datepicker-heading">When would you like to visit?</h3>
      <form onSubmit={handleSubmit}>
        <DateManager
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          onDatesChange={handleDatesChange}
        />
        <div className="guests-container">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            className="guests-input"
            type="number"
            id="guests"
            name="guests"
            value={guests}
            onChange={handleGuestsChange}
            min="1"
            max={maxGuests}
          />
        </div>
        {arrivalDate && departureDate && <h3>Total Price: {totalPrice} NOK</h3>}
        <CtaStyledButton type="submit">Book Now</CtaStyledButton>
      </form>
    </div>
  );
}

export default BookingForm;
