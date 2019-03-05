const express = require("express");
const router = express.Router();
const validateObjectID = require("../middleware/objectIDValidation");
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

router.get("/:id", validateObjectID, async (req, res) => {
  const shirt = await Shirt.findById(req.params.id);
  if (!shirt)
    return res.status(404).send("There is no shirt with this provided id");
  res.status(200).send(shirt);
});

router.put(
  "/:id",
  validateObjectID,
  upload.single("image"),
  async (req, res) => {
    const result = validate(req.body);
    if (result.error)
      return res.status(400).send(result.error.details[0].message);

    const shirt = await Shirt.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand
      },
      { new: true }
    );

    if (req.file) {
      shirt.image = getImageURL(req.headers.host, req.file.path);
    }
    await shirt.save();
    res.status(200).send(shirt);
  }
);

router.delete("/:id", validateObjectID, async (req, res) => {
  const shirt = await Shirt.findByIdAndRemove(req.params.id);
  if (!shirt)
    return res.status(404).send("There is no shirt with this provided id");
  res.status(200).send(shirt);
});

module.exports = router;
