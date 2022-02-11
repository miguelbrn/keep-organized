const usersService = require('../services/users');
const { jwtCreate } = require('../auth/jwt');

const create = async (req, res) => {
  const { user, email, password } = req.body

  const newUser = await usersService.create(user, email, password)
  const token = jwtCreate({ payload: email})
  newUser.token = token
  return res.status(201).json(newUser)
}

module.exports = {
  create,
}
