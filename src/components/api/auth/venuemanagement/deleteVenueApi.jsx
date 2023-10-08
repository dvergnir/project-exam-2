import { VENUE_URL } from "../../../../assets/constants";

const deleteVenueApi = async (accessToken, venueId) => {
  const url = `${VENUE_URL}/${venueId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return true;
    } else {
      console.error("Error deleting venue:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error occurred while deleting venue:", error);
    return false;
  }
};

export default deleteVenueApi;
