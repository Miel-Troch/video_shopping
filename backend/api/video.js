const express = require('express')
const app = express.Router()
const videos = require('../data/videos.json')

app.get('/', async (req, res) => {
  res.send(videos)
})

app.get('/:id', async (req, res) => {
  res.send(videos.find((i) => i.id === parseInt(req.params.id)))
})

module.exports = app
