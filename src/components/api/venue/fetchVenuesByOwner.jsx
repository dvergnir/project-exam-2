import { PROFILE_URL } from "../../../assets/constants";
const username = localStorage.getItem("name");

export const fetchVenuesByOwner = async (accessToken) => {
  try {
    const response = await fetch(
      `${PROFILE_URL}/${username}/venues?_bookings=true`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch venues: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
