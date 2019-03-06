const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200
  },
  outerWear: {
    type: Schema.Types.ObjectId,
    ref: "OuterWear"
  },
  shirt: {
    type: Schema.Types.ObjectId,
    ref: "Shirt"
  },
  pants: {
    type: Schema.Types.ObjectId,
    ref: "Pants"
  },
  shoes: {
    type: Schema.Types.ObjectId,
    ref: "Shoes"
  },
  image: {
    type: String
  }
});

const Outfit = mongoose.model("Outfit", schema);

// Validating req.body
function validate(body) {
  const schema = {
    name: Joi.string()
      .min(1)
      .max(200)
      .required(),
    outerWear: Joi.objectId(),
    shirt: Joi.objectId(),
    pants: Joi.objectId(),
    shoes: Joi.objectId(),
    image: Joi.string()
  };
  const result = Joi.validate(body, schema);
  return result;
}

module.exports.validate = validate;
module.exports.schema = schema;
module.exports.Outfit = Outfit;
