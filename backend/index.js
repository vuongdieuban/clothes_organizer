const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const shirts = require("./routes/shirts");
const port = process.env.PORT || 5000;
const app = express();

mongoose
  .connect("mongodb://localhost/clothes", {
    useNewUrlParser: true
  })
  .then(console.log("MongoDB started"));

// Routing
app.use(express.json());
app.use(cors());

app.use("/uploads/shirts", express.static("uploads"));
app.use("/shirts", shirts);

app.listen(port, () => {
  console.log(`Starting the server on ${port}`);
});
