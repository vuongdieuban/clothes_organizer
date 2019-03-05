const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/clothes", {
      useNewUrlParser: true
    })
    .then(console.log("MongoDB started"));
};
