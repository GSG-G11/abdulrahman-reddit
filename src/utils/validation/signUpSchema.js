const Joi = require('joi');

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/).required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = signUpSchema;
