import { VENUE_URL } from "../../../../assets/constants";

const createVenueApi = async (venueData) => {
  console.log("Creating venue with data:", venueData);
  const token = localStorage.getItem("accessToken");

  if (venueData.media && venueData.media.trim() !== "") {
    const mediaUrls = venueData.media.split(",").map((url) => url.trim());
    venueData.media = mediaUrls;
  } else {
    venueData.media = [];
  }

  try {
    const response = await fetch(VENUE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(venueData),
    });
    console.log(response);
    console.log(venueData);

    if (response.ok) {
      // Venue created successfully
      const responseData = await response.json();
      return responseData; // You can return the response data if needed
    } else {
      // Handle the error here
      console.error("Error creating venue:", response.statusText);
      return null;
    }
  } catch (error) {
    // Handle any network or other errors
    console.error("Error occurred while creating venue:", error);
    return null;
  }
};

export default createVenueApi;
