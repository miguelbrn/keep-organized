const modelTasks = require('../models/tasks');

const create = async (userId, task) => modelTasks.create(userId, task);

module.exports = {
  create,
};
