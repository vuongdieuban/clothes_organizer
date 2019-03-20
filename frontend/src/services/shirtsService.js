import axios from "axios";
import getBaseURL from "./baseURL";

const SHIRT_URL = `${getBaseURL()}/shirts`;

export async function getAllShirts() {
  const { data } = await axios.get(SHIRT_URL);
  return data;
}
