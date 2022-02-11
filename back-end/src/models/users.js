const connection = require('./connection');

const create = async (user, email, password) => {
  const db = await connection();
  const { insertedId } = await db.collection('users').insertOne({user, email, password})

  return { id: insertedId, user, email }
}

module.exports = {
  create
}
