import { BASE_URL } from "../../../assets/constants";
export async function fetchData() {
  const url = `${BASE_URL}/venues?sort=created&sort_by=asc`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
