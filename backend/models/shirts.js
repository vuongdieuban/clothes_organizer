const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200
  },
  price: {
    type: Number
  },
  brand: {
    type: String,
    minlength: 1,
    maxlength: 200
  },
  image: {
    type: String
  }
});

const Shirt = mongoose.model("Shirt", schema);

// Validating req.body
function validate(body) {
  const schema = {
    name: Joi.string()
      .min(1)
      .max(200)
      .required(),
    price: Joi.number(),
    brand: Joi.string()
      .min(1)
      .max(200)
      .required()
  };
  const result = Joi.validate(body, schema);
  return result;
}

module.exports.Shirt = Shirt;
module.exports.validate = validate;
