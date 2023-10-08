import { useState, useEffect } from "react";
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

  const excludedDates = [];
  for (const booking of bookedDates) {
    const startDate = new Date(booking.dateFrom);
    const endDate = new Date(booking.dateTo);

    const datesInRange = getDatesBetweenDates(startDate, endDate);

    excludedDates.push(...datesInRange);
  }

  return (
    <DateManagerContainer>
      <DatePicker
        selected={localArrivalDate}
        onChange={(date) => setLocalArrivalDate(date)}
        placeholderText="Arrival"
        minDate={new Date()}
        className="date-picker"
        excludeDates={excludedDates}
        title="Select arrival date"
      />
      <p>to</p>
      <DatePicker
        selected={localDepartureDate}
        onChange={(date) => setLocalDepartureDate(date)}
        placeholderText="Departure"
        minDate={localArrivalDate || new Date()}
        className="date-picker"
        excludeDates={excludedDates}
        title="Select departure date"
      />
    </DateManagerContainer>
  );
}

function getDatesBetweenDates(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export default DateManager;
