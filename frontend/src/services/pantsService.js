import axios from "axios";
import getBaseURL from "./baseURL";

const PANTS_URL = `${getBaseURL()}/pants`;

export async function getAllPants() {
  const { data } = await axios.get(PANTS_URL);
  return data;
}
