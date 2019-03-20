import React, { Component } from "react";
import { getBaseURL } from "../services/baseURL";
import { getAllShirts } from "../services/shirtsService";
import CommonClothingModel from "./common/commonClothingModel";

const SHIRT_URL = `${getBaseURL()}/shirts`;

class Shirt extends CommonClothingModel {
  getAllData = () => {
    return getAllShirts(SHIRT_URL);
  };
}

export default Shirt;
