import axios from "axios";

export async function getAllShirts(url) {
  const { data } = await axios.get(url);
  return data;
}
