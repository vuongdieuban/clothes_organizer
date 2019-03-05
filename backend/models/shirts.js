const mongoose = require("mongoose");
const { commonSchema } = require("./commonModel");

const Shirt = mongoose.model("Shirt", commonSchema);

module.exports = Shirt;
