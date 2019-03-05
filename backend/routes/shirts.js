const express = require("express");
const router = express.Router();
const Route = require("./commonModelRoute");
const validateObjectID = require("../middleware/objectIDValidation");
const { upload } = require("../utils/imageUpload");
const ShirtModel = require("../models/shirts");

const Shirt = new Route(ShirtModel);
router.get("/", Shirt.getAll());
router.post("/", upload.single("image"), Shirt.post());
router.get("/:id", validateObjectID, Shirt.getOne());
router.put("/:id", validateObjectID, upload.single("image"), Shirt.put());
router.delete("/:id", validateObjectID, Shirt.delete());

module.exports = router;
