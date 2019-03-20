import { getAllOuterWears } from "../services/outerWearService";
import CommonClothingModel from "./common/commonClothingModel";

class OuterWear extends CommonClothingModel {
  getAllData = () => {
    return getAllOuterWears();
  };
}

export default OuterWear;
