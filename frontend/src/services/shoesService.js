import axios from "axios";

export async function getAllShoes(url) {
  const { data } = await axios.get(url);
  return data;
}
