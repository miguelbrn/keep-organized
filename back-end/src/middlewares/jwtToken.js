const { jwtVerify } = require('../auth/jwt')

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'token deve ser preencido'})

    const { payload } = jwtVerify(authorization)
    req.user = payload
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token'})
  }
}
