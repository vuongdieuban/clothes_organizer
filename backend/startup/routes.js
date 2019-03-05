const express = require("express");
const cors = require("cors");

const shirts = require("../routes/shirts");
const pants = require("../routes/pants");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  app.use("/uploads", express.static("uploads"));
  app.use("/shirts", shirts);
  app.use("/pants", pants);
};
