import { getAllOutfits } from "../services/outfitService";
import CommonClothingModel from "./common/commonClothingModel";

class Outfit extends CommonClothingModel {
  getAllData = () => {
    return getAllOutfits();
  };
}

export default Outfit;
