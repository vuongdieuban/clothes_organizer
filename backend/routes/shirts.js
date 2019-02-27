const express = require("express");
const router = express.Router();
const { Shirt, validate } = require("../models/shirts");

router.get("/", async (req, res) => {
  const shirts = await Shirt.find().sort("name");
  res.status(200).send(shirts);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const new_shirt = new Shirt({
    name: req.body.name,
    price: req.body.price,
    brand: req.body.brand
  });
  await new_shirt.save();

  res.status(200).send(new_shirt);
});

module.exports = router;
