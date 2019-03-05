const express = require("express");
const router = express.Router();
const Route = require("./commonModelRoute");
const validateObjectID = require("../middleware/objectIDValidation");
const { upload } = require("../utils/imageUpload");
const PantsModel = require("../models/pants");

const Pants = new Route(PantsModel);
router.get("/", Pants.getAll());
router.post("/", upload.single("image"), Pants.post());
router.get("/:id", validateObjectID, Pants.getOne());
router.put("/:id", validateObjectID, upload.single("image"), Pants.put());
router.delete("/:id", validateObjectID, Pants.delete());

module.exports = router;
