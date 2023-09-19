import { BASE_URL } from "../../../../assets/constants";

export const fetchBookedDates = async (venueId) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Access token not found in localStorage");
    }

    const response = await fetch(
      `${BASE_URL}/venues/${venueId}?_bookings=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      if (Array.isArray(data.bookings)) {
        return data.bookings.map((booking) => ({
          dateFrom: new Date(booking.dateFrom),
          dateTo: new Date(booking.dateTo),
        }));
      } else {
        console.log("Invalid 'bookings' field in response data:", data);
        throw new Error("Invalid 'bookings' field");
      }
    } else {
      console.log(response);
      throw new Error("Failed to fetch booked dates");
    }
  } catch (error) {
    console.error("Error fetching booked dates:", error);
    return [];
  }
};
