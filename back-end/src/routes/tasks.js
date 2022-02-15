const express = require('express');
const tasksController = require('../controllers/tasks');
const jwtValidation = require('../middlewares/jwtToken')

const route = express.Router();

route.post('/',jwtValidation ,tasksController.create);

module.exports = route;
