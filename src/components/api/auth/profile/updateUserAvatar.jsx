import { BASE_URL } from "../../../../assets/constants";

export const updateUserAvatar = async (newAvatarUrl) => {
  const username = localStorage.getItem("name");
  const accessToken = localStorage.getItem("accessToken");

  if (!username) {
    throw new Error("Username not found in localStorage");
  }

  if (!accessToken) {
    throw new Error("Access token not found in localStorage");
  }

  const apiUrl = `${BASE_URL}/profiles/${username}/media`;

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ avatar: newAvatarUrl }),
  };

  const response = await fetch(apiUrl, requestOptions);

  console.log("Response:", response);

  if (!response.ok) {
    throw new Error("Failed to update avatar");
  }

  return true;
};
