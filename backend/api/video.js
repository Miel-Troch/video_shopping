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

app.post('/', async (req, res) => {
  await video
    .create({ categoryId: req.body.categoryId, title: req.body.title, videoUrl: req.body.videoUrl })
    .then(() => {
      res.sendStatus(200)
    })
})

app.put('/:id', async (req, res) => {
  await video
    .update(
      { categoryId: req.body.categoryId, title: req.body.title, videoUrl: req.body.videoUrl },
      { where: { id: req.params.id } }
    )
    .then(() => {
      res.sendStatus(200)
    })
})

module.exports = app
