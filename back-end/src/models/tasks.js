const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (userId, task) => {
  const db = await connection();
  const newTask = await db.collection('users').findOneAndUpdate(
    { _id: ObjectId(userId) },
    { $push: { tasks: task } },
  )

  return newTask
}

module.exports = {
  create
}
