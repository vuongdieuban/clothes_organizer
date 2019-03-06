const mongoose = require("mongoose");
const { commonSchema } = require("./commonModel");

const OuterWear = mongoose.model("OuterWear", commonSchema);

module.exports = OuterWear;
