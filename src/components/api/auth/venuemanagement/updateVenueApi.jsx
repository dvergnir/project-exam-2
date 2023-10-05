import { BASE_URL } from "../../../../assets/constants";

export const updateVenueApi = async (
  accessToken,
  venueId,
  updatedVenueData
) => {
  if (
    typeof updatedVenueData.media === "string" &&
    updatedVenueData.media.trim() !== ""
  ) {
    const mediaUrls = updatedVenueData.media
      .split(",")
      .map((url) => url.trim());
    updatedVenueData.media = mediaUrls;
  } else {
    updatedVenueData.media = [];
  }
  try {
    const response = await fetch(`${BASE_URL}/venues/${venueId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVenueData),
    });

    console.log(updatedVenueData);

    if (!response.ok) {
      throw new Error("Failed to update venue");
    }

    return true;
  } catch (error) {
    console.error("Error updating venue:", error);
    throw error;
  }
};
