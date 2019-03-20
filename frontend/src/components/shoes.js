import { getAllShoes } from "../services/shoesService";
import CommonClothingModel from "./common/commonClothingModel";

class Shoes extends CommonClothingModel {
  getAllData = () => {
    return getAllShoes();
  };
}

export default Shoes;
