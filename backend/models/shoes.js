const mongoose = require("mongoose");
const { commonSchema } = require("./commonModel");

const Shoes = mongoose.model("Shoes", commonSchema);

module.exports = Shoes;
