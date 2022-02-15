require('dotenv').config
const express = require('express')
const routes = require('./routes/index')
const errors = require('./errors/errors')

const app = express()
app.use(express.json())

app.use('/user', routes.users)
app.use(errors)

module.exports = app;
