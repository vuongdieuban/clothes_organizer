const express = require("express");
const router = express.Router();
const RouteHandler = require("./commonModelRoute");
const validateObjectID = require("../middleware/objectIDValidation");
const { upload } = require("../utils/imageUpload");
const PantsModel = require("../models/pants");

const Pants = new RouteHandler(PantsModel);
router.get("/", Pants.getAll());
router.post("/", upload.single("image"), Pants.post());
router.get("/:id", validateObjectID, Pants.getOne());
router.put("/:id", validateObjectID, upload.single("image"), Pants.put());
router.delete("/:id", validateObjectID, Pants.delete());

module.exports = router;
