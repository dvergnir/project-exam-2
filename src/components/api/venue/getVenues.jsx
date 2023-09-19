import { BASE_URL } from "../../../assets/constants";
export async function fetchData() {
  const url = `${BASE_URL}/venues`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
