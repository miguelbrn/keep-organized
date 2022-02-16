const usersService = require('../services/users');
const { jwtCreate } = require('../auth/jwt');

const create = async (req, res) => {
  const { user, email, password } = req.body

  const newUser = await usersService.create(user, email, password)
  const token = jwtCreate({ payload: email})
  newUser.token = token
  return res.status(201).json(newUser)
}

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('passou aqui');
  const user = await usersService.login(email, password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials'})

  const token = jwtCreate({ payload: user })

  return res.status(201).json({ token })
}

module.exports = {
  create,
  login
}
