import axios from "axios";

export async function getAllPants(url) {
  const { data } = await axios.get(url);
  return data;
}
