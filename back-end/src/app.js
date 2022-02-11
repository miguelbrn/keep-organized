require('dotenv').config
const express = require('express')
const routes = require('./routes/index')

const app = express()
app.use(express.json())

app.use('/users', routes.users)

module.exports = app;
