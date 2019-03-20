import React, { Component } from "react";
import { getBaseURL } from "../services/baseURL";
import { getAllShoes } from "../services/shoesService";
import CommonClothingModel from "./common/commonClothingModel";

const SHOES_URL = `${getBaseURL()}/shoes`;

class Shoes extends CommonClothingModel {
  getAllData = () => {
    return getAllShoes(SHOES_URL);
  };
}

export default Shoes;
