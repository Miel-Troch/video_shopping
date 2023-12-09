const express = require('express')
const app = express.Router()
const { video } = require('../Database')

app.get('/', async (req, res) => {
  await video.findAll().then((data) => {
    res.send(data)
  })
})

app.get('/:id', async (req, res) => {
  await video.findOne({ where: { id: req.params.id } }).then((data) => {
    res.send(data)
  })
})

module.exports = app
