import axios from "axios";
import getBaseURL from "./baseURL";

const SHOES_URL = `${getBaseURL()}/shoes`;

export async function getAllShoes() {
  const { data } = await axios.get(SHOES_URL);
  return data;
}
