import { getAllShirts } from "../services/shirtsService";
import CommonClothingModel from "./common/commonClothingModel";

class Shirt extends CommonClothingModel {
  getAllData = () => {
    return getAllShirts();
  };
}

export default Shirt;
