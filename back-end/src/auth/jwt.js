require('dotenv').config();
const jwt = require('jsonwebtoken');

// eslint-disable-next-line no-undef
const secret = process.env.JWT_SECRET;

const jwtCreate = (payload) => jwt.sign(payload, secret, { expiresIn: '1d'});

const jwtVerify = (token) => jwt.verify(token, secret);

module.exports = {
  jwtCreate,
  jwtVerify,
}
