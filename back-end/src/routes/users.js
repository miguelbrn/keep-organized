const { Router } = require('express');

const usersController = require('../controllers/users');

const routes = new Router();

routes.post('/', usersController.create);

module.exports = routes;
