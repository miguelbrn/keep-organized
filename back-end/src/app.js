require('dotenv').config
const express = require('express')
const connection = require('./models/connection')

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  const { test } = req.body
  const db = await connection()
  const result = db.collection('teste').insertOne({test})

  return res.status(200).json(result)
} )

module.exports = app;
