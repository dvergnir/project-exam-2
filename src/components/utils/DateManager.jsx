import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateManagerContainer } from "./DateManager.styled";

function DateManager({ onDatesChange, arrivalDate, departureDate }) {
  // Use state to manage the arrival and departure dates
  const [localArrivalDate, setLocalArrivalDate] = useState(arrivalDate);
  const [localDepartureDate, setLocalDepartureDate] = useState(departureDate);

  useEffect(() => {
    // Call the callback function passed as a prop to update dates in the parent component
    onDatesChange(localArrivalDate, localDepartureDate);
  }, [localArrivalDate, localDepartureDate, onDatesChange]);

  return (
    <DateManagerContainer>
      <DatePicker
        selected={localArrivalDate}
        onChange={(date) => setLocalArrivalDate(date)}
        placeholderText="Arrival"
        minDate={new Date()}
        className="date-picker"
      />{" "}
      <p>to</p>
      <DatePicker
        selected={localDepartureDate}
        onChange={(date) => setLocalDepartureDate(date)}
        placeholderText="Departure"
        minDate={localArrivalDate || new Date()} // Set minDate based on arrivalDate
        className="date-picker"
      />
    </DateManagerContainer>
  );
}

export default DateManager;
