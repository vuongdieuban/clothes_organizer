import React, { Component } from "react";
import { getBaseURL } from "../services/baseURL";
import { getAllPants } from "../services/pantsService";
import CommonClothingModel from "./common/commonClothingModel";

const PANTS_URL = `${getBaseURL()}/pants`;

class Pants extends CommonClothingModel {
  getAllData = () => {
    return getAllPants(PANTS_URL);
  };
}

export default Pants;
