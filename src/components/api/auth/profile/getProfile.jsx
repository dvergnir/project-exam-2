import { BASE_URL } from "../../../../assets/constants";

export const getProfile = async () => {
  try {
    const username = localStorage.getItem("name");
    const accessToken = localStorage.getItem("accessToken");

    if (!username) {
      throw new Error("Username not found in localStorage");
    }

    if (!accessToken) {
      throw new Error("Access token not found in localStorage");
    }

    const apiUrl = `${BASE_URL}/profiles/${username}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const userProfile = await response.json();

    return userProfile;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
