const express = require("express");
const router = express.Router();
const validateObjectID = require("../middleware/objectIDValidation");
const { upload, getImageURL } = require("../utils/imageUpload");
const { Outfit, validate } = require("../models/outfits");
const OuterWear = require("../models/outerWears");
const Shirt = require("../models/shirts");
const Pants = require("../models/pants");
const Shoes = require("../models/shoes");

router.get("/", async (req, res) => {
  const outfits = await Outfit.find().sort("name");
  res.status(200).send(outfits);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const outerWear = await OuterWear.findById(req.body.outerWear);
  if (!outerWear)
    return res.status(404).send("There is no OuterWear with this provided Id");

  const shirt = await Shirt.findById(req.body.shirt);
  if (!shirt)
    return res.status(404).send("There is no Shirt with this provided Id");

  const pants = await Pants.findById(req.body.shirt);
  if (!pants)
    return res.status(404).send("There is no Pants with this provided Id");

  const shoes = await Shoes.findById(req.body.shirt);
  if (!shoes)
    return res.status(404).send("There is no Shoes with this provided Id");

  const outfit = new Outfit({
    name: req.body.name,
    outerWear: {
      _id: outerWear._id,
      name: outerWear.name,
      image: outerWear.image
    }
  });

  await outfit.save();
  res.status(200).send(outfit);
});

module.exports = router;
