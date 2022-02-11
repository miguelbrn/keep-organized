const usersModel = require('../models/users')

const create = async (user, email, password) => usersModel.create(user, email, password)

module.exports = {
  create
}
