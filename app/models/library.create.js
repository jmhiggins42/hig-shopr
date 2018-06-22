const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = {
  title: Joi.string().required(),
  status: Joi.string().required(),
  system: Joi.string().required(),
  tags: Joi.array().items(Joi.string())
};

module.exports = Joi.object().keys(schema);
