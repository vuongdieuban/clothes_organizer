const express = require("express");
const cors = require("cors");

const shirts = require("../routes/shirts");
const pants = require("../routes/pants");
const outerWear = require("../routes/outerWears");
const shoes = require("../routes/shoes");
const outfit = require("../routes/outfits");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  app.use("/uploads", express.static("uploads"));
  app.use("/shirts", shirts);
  app.use("/pants", pants);
  app.use("/outerwear", outerWear);
  app.use("/shoes", shoes);
  app.use("/outfit", outfit);
};
