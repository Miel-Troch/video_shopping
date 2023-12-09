const express = require('express')
const app = express.Router()
const { product } = require('../Database')

app.get('/', async (req, res) => {
  await product.findAll().then((data) => {
    res.send(data)
  })
})

app.get('/:id', async (req, res) => {
  await product.findOne({ where: { id: req.params.id } }).then((data) => {
    res.send(data)
  })
})

module.exports = app
