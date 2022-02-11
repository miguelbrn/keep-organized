const { Router } = require('express');

const usersMiddleware = require('../middlewares/users');
const usersController = require('../controllers/users');

const routes = new Router();

routes.post('/',
  usersMiddleware.validateUser,
  usersController.create);

module.exports = routes;
