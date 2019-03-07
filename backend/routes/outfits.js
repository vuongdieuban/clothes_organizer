const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const validateObjectID = require("../middleware/objectIDValidation");
const { upload, getImageURL } = require("../utils/imageUpload");
const { Outfit, validate } = require("../models/outfits");
const OuterWear = require("../models/outerWears");
const Shirt = require("../models/shirts");
const Pants = require("../models/pants");
const Shoes = require("../models/shoes");

router.get("/", async (req, res) => {
  const outfits = await Outfit.find()
    .sort("name")
    .populate("outerWear")
    .populate("shirt")
    .populate("pants")
    .populate("shoes");
  res.status(200).send(outfits);
});

router.post("/", upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // req.body contains _id of individual item
  const { name, outerWear, shirt, pants, shoes } = req.body;
  const items = [
    { label: "OuterWear", model: OuterWear, id: outerWear },
    { label: "Shirt", model: Shirt, id: shirt },
    { label: "Pants", model: Pants, id: pants },
    { label: "Shoes", model: Shoes, id: shoes }
  ];
  const { exist, label } = await validateItemsExist(items);
  if (!exist)
    return res.status(404).send(`There is no ${label} with the provided Id`);

  const outfit = new Outfit({
    name: name,
    outerWear: outerWear,
    shirt: shirt,
    pants: pants,
    shoes: shoes
  });

  if (req.file) {
    outfit.image = getImageURL(req.headers.host, req.file.path);
  }

  await outfit.save();
  res.status(200).send(outfit);
});

router.get("/:id", validateObjectID, async (req, res) => {
  const outfit = await Outfit.findById(req.params.id)
    .populate("outerWear")
    .populate("shirt")
    .populate("pants")
    .populate("shoes");
  if (!outfit)
    return res.status(404).send("There is no Outfit with the provided Id");
  res.status(200).send(outfit);
});

router.put(
  "/:id",
  validateObjectID,
  upload.single("image"),
  async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // req.body contains _id of individual item
    const { name, outerWear, shirt, pants, shoes } = req.body;
    const items = [
      { label: "OuterWear", model: OuterWear, id: outerWear },
      { label: "Shirt", model: Shirt, id: shirt },
      { label: "Pants", model: Pants, id: pants },
      { label: "Shoes", model: Shoes, id: shoes }
    ];
    const { exist, label } = await validateItemsExist(items);
    if (!exist)
      return res.status(404).send(`There is no ${label} with the provided Id`);

    const outfit = await Outfit.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        outerWear: outerWear,
        shirt: shirt,
        pants: pants,
        shoes: shoes
      },
      { new: true }
    );

    if (!outfit)
      return res.status(404).send("There is no Outfit with the provided Id");

    if (req.file) {
      outfit.image = getImageURL(req.headers.host, req.file.path);
    }

    await outfit.save();
    res.status(200).send(outfit);
  }
);

router.delete("/:id", validateObjectID, async (req, res) => {
  const outfit = await Outfit.findByIdAndRemove(req.params.id);
  if (!outfit)
    return res.status(404).send("There is no Outfit with the provided Id");
  return res.status(200).send(outfit);
});

async function validateItemsExist(items) {
  let result;
  let ret = { exist: null, label: "" };
  for (let i = 0; i < items.length; i++) {
    result = await items[i].model.findById(items[i].id);
    if (!result) {
      ret.exist = false;
      ret.label = items[i].label;
      return ret;
    }
    ret.exist = true;
  }
  return ret;
}

module.exports = router;
