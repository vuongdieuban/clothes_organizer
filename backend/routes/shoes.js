const express = require("express");
const router = express.Router();
const RouteHandler = require("./commonModelRoute");
const validateObjectID = require("../middleware/objectIDValidation");
const { upload } = require("../utils/imageUpload");
const ShoesModel = require("../models/shoes");

const Shoes = new RouteHandler(ShoesModel);
router.get("/", Shoes.getAll());
router.post("/", upload.single("image"), Shoes.post());
router.get("/:id", validateObjectID, Shoes.getOne());
router.put("/:id", validateObjectID, upload.single("image"), Shoes.put());
router.delete("/:id", validateObjectID, Shoes.delete());

module.exports = router;
