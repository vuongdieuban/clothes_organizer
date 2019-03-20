import React, { Component } from "react";
import { getBaseURL } from "../services/baseURL";
import { getAllOuterWear } from "../services/outerWearService";
import CommonClothingModel from "./common/commonClothingModel";

const OUTERWEAR_URL = `${getBaseURL()}/outerwear`;

class OuterWear extends CommonClothingModel {
  getAllData = () => {
    return getAllOuterWear(OUTERWEAR_URL);
  };
}

export default OuterWear;
