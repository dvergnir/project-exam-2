import { PROFILE_URL } from "../../../../assets/constants";

export async function fetchBookingsForProfile() {
  const token = localStorage.getItem("accessToken");
  const profileName = localStorage.getItem("name");

  const apiUrl = `${PROFILE_URL}/${profileName}/bookings?_venue=true`;
  console.log(apiUrl);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
