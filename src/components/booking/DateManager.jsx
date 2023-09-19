import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateManagerContainer } from "./DateManager.styled";

function DateManager({
  onDatesChange,
  arrivalDate,
  departureDate,
  bookedDates,
}) {
  const [localArrivalDate, setLocalArrivalDate] = useState(arrivalDate);
  const [localDepartureDate, setLocalDepartureDate] = useState(departureDate);

  useEffect(() => {
    if (
      localArrivalDate !== arrivalDate ||
      localDepartureDate !== departureDate
    ) {
      onDatesChange(localArrivalDate, localDepartureDate);
    }
  }, [
    localArrivalDate,
    localDepartureDate,
    arrivalDate,
    departureDate,
    onDatesChange,
  ]);

  return (
    <DateManagerContainer>
      <DatePicker
        selected={localArrivalDate}
        onChange={(date) => setLocalArrivalDate(date)}
        placeholderText="Arrival"
        minDate={new Date()}
        className="date-picker"
        excludeDates={bookedDates.map((booking) => new Date(booking.dateFrom))} // Use excludeDates
      />
      <p>to</p>
      <DatePicker
        selected={localDepartureDate}
        onChange={(date) => setLocalDepartureDate(date)}
        placeholderText="Departure"
        minDate={localArrivalDate || new Date()}
        className="date-picker"
        excludeDates={bookedDates.map((booking) => new Date(booking.dateFrom))} // Use excludeDates
      />
    </DateManagerContainer>
  );
}

export default DateManager;
