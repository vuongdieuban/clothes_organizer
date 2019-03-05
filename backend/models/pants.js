const mongoose = require("mongoose");
const { commonSchema } = require("./commonModel");

const Pants = mongoose.model("Pants", commonSchema);

module.exports = Pants;
