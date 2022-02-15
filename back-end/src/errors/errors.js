const Joi = require('joi');

// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) => {
  console.log('aqiu')
  if (Joi.isError(err)) {
    return res.status(400).json({
      error: err.message,
    });
  }

  res.status(500).json({ message: 'Internal server error' });
}
