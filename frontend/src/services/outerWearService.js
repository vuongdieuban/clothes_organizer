import axios from "axios";

export async function getAllOuterWear(url) {
  const { data } = await axios.get(url);
  return data;
}
