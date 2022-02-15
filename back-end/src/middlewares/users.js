const Joi = require('joi');

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    user: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }).validate(req.body);

  if (error) next(error);

  next();
}

const validateLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }).validate(req.body);

  if (error) next(error);

  next();
}

module.exports = {
  validateUser,
  validateLogin
}
