import axios from "axios";
import getBaseURL from "./baseURL";

const OUTERWEAR_URL = `${getBaseURL()}/outerwear`;

export async function getAllOuterWears() {
  const { data } = await axios.get(OUTERWEAR_URL);
  return data;
}
