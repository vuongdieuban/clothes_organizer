const express = require("express");
const cors = require("cors");

const shirts = require("../routes/shirts");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  app.use("/uploads", express.static("uploads"));
  app.use("/shirts", shirts);
};
