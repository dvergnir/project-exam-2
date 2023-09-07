import { BASE_URL } from "../../assets/constants";

export const getVenueById = async (venueId) => {
  try {
    const response = await fetch(`${BASE_URL}/venues/${venueId}`);
    if (!response.ok) {
      throw new Error("Failed to find venue");
    }
    const productData = await response.json();
    console.log(response);
    return productData;
  } catch (error) {
    console.error("Error fetching venue:", error);
    throw error;
  }
};
