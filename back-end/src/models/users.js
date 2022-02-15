const connection = require('./connection');

const create = async (user, email, password) => {
  const db = await connection();
  const { insertedId } = await db.collection('users').insertOne({user, email, password})

  return { id: insertedId, user, email }
}

const login = async (email, password) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email, password})
  
  if (user) {
    delete user.password
    return user
  }
  return null
}

module.exports = {
  create,
  login
}
