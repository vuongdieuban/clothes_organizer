const { validate } = require("../models/commonModel");
const { getImageURL } = require("../utils/imageUpload");

class RouteHandler {
  constructor(model) {
    this.model = model;
  }

  getAll() {
    return async (req, res) => {
      const data = await this.model.find().sort("name");
      res.status(200).send(data);
    };
  }

  post() {
    return async (req, res) => {
      const { error } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const data = new this.model({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand
      });

      if (req.file) {
        data.image = getImageURL(req.headers.host, req.file.path);
      }

      await data.save();
      res.status(200).send(data);
    };
  }

  getOne() {
    return async (req, res) => {
      const data = await this.model.findById(req.params.id);
      if (!data)
        return res.status(404).send(`There is no data with this provided id`);

      res.status(200).send(data);
    };
  }

  put() {
    return async (req, res) => {
      const result = validate(req.body);
      if (result.error)
        return res.status(400).send(result.error.details[0].message);

      const data = await this.model.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          price: req.body.price,
          brand: req.body.brand
        },
        { new: true }
      );

      if (data && req.file) {
        data.image = getImageURL(req.headers.host, req.file.path);
      }

      if (!data) {
        return res.status(404).send(`There is no data with this provided id`);
      }

      await data.save();
      res.status(200).send(data);
    };
  }

  delete() {
    return async (req, res) => {
      const data = await this.model.findByIdAndRemove(req.params.id);
      if (!data)
        return res.status(404).send(`There is no data with this provided id`);

      res.status(200).send(data);
    };
  }
}

module.exports = RouteHandler;
