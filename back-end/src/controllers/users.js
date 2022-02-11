const usersService = require('../services/users');

const create = async (req, res) => {
  const { user, email, password } = req.body

  const newUser = await usersService.create(user, email, password)

  return res.status(201).json(newUser)
}

module.exports = {
  create,
}
