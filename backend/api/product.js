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

app.post('/', async (req, res) => {
  await product
    .create({
      video_id: req.body.videoId,
      name: req.body.name,
      brandName: req.body.brandName,
      price: req.body.price,
    })
    .then(() => {
      res.sendStatus(200)
    })
})

module.exports = app
