import { BOOKING_URL } from "../../../../assets/constants";

async function submitBooking(formData) {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(BOOKING_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Booking successful! Response data:", data);
      return data;
    } else {
      console.error("Booking failed with status:", response.status);
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw error;
  }
}

export default submitBooking;
