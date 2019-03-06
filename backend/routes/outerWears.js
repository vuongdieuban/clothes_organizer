const express = require("express");
const router = express.Router();
const RouteHandler = require("./commonModelRoute");
const validateObjectID = require("../middleware/objectIDValidation");
const { upload } = require("../utils/imageUpload");
const OuterWearModel = require("../models/outerWears");

const OuterWear = new RouteHandler(OuterWearModel);
router.get("/", OuterWear.getAll());
router.post("/", upload.single("image"), OuterWear.post());
router.get("/:id", validateObjectID, OuterWear.getOne());
router.put("/:id", validateObjectID, upload.single("image"), OuterWear.put());
router.delete("/:id", validateObjectID, OuterWear.delete());

module.exports = router;
