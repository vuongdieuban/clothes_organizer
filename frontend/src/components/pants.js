import { getAllPants } from "../services/pantsService";
import CommonClothingModel from "./common/commonClothingModel";

class Pants extends CommonClothingModel {
  getAllData = () => {
    return getAllPants();
  };
}

export default Pants;
