const { Router } = require('express');

const usersMiddleware = require('../middlewares/users');
const usersController = require('../controllers/users');

const routes = new Router();

routes.post('/',
  usersMiddleware.validateUser,
  usersController.create);

routes.post('/login',usersMiddleware.validateLogin ,usersController.login);

module.exports = routes;
