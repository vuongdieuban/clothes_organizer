const express = require("express");
const router = express.Router();
const { Shirt, validate } = require("../models/shirts");
const { upload, getImageURL } = require("../utils/imageUpload");

router.get("/", async (req, res) => {
  const shirts = await Shirt.find().sort("name");
  res.status(200).send(shirts);
});

router.post("/", upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const shirt = new Shirt({
    name: req.body.name,
    price: req.body.price,
    brand: req.body.brand
  });

  if (req.file) {
    shirt.image = getImageURL(req.headers.host, req.file.path);
  }
  await shirt.save();

  res.status(200).send(shirt);
});

module.exports = router;
