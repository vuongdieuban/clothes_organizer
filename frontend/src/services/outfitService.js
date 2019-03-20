import axios from "axios";
import getBaseURL from "./baseURL";

const OUTFIT_URL = `${getBaseURL()}/outfit`;

export async function getAllOutfits() {
  const { data } = await axios.get(OUTFIT_URL);
  return data;
}

export async function getOneOutfit(id) {
  const { data } = await axios.get(OUTFIT_URL + "/" + id);
  return data;
}

export async function saveOutfit(outfit) {
  if (outfit._id) {
    const body = { ...outfit };
    delete body._id;
    const { data } = await axios.put(OUTFIT_URL + "/" + outfit._id, body);
    return data;
  }
  const { data } = await axios.post(OUTFIT_URL, outfit);
  return data;
}
