const usersModel = require('../models/users')

const create = async (user, email, password) => usersModel.create(user, email, password)

const login = async (email, password) => usersModel.login(email, password)

module.exports = {
  create,
  login
}
