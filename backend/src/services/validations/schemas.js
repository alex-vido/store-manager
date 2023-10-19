const Joi = require('joi');

const addProductSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string().min(5).required(),
});

module.exports = {
  addProductSchema,
};