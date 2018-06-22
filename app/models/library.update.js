const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = {
  _id: Joi.objectId(),
  title: Joi.string(),
  status: Joi.string(),
  system: Joi.string(),
  tags: Joi.array().items(Joi.string())
};

module.exports = Joi.object().keys(schema);
