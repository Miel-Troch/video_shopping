const express = require('express')
const app = express.Router()
const { category } = require('../Database')

app.get('/', async (req, res) => {
  await category.findAll().then((data) => {
    res.send(data)
  })
})

app.get('/:id', async (req, res) => {
  await category.findOne({ where: { id: req.params.id } }).then((data) => {
    res.send(data)
  })
})

app.post('/', async (req, res) => {
  await category.create({ name: req.body.name }).then(() => {
    res.sendStatus(200)
  })
})

app.put('/:id', async (req, res) => {
  await category.update({ name: req.body.name }, { where: { id: req.params.id } }).then(() => {
    res.sendStatus(200)
  })
})

module.exports = app
