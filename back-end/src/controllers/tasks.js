const servicesTasks = require('../services/tasks');

const create = async (req, res) => {
  const { task } = req.body;
  const { _id: userId } = req.user
  console.log(userId)
  const newTask = await servicesTasks.create(userId, task);

  res.status(201).json(newTask);
};

module.exports = {
  create,
};
