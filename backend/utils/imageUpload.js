/*Set up multer for file storage (image) */
const multer = require("multer");
const fs = require("fs");

// Make uploads folder if not exist (existsSync checks for the path relative to root folder)
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Can only accept jpeg and png"), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter
});

function getImageURL(hostName, filePath) {
  return `http://${hostName}/${filePath}`;
}

module.exports.upload = upload;
module.exports.getImageURL = getImageURL;
