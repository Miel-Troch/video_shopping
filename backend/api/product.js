const express = require('express')
const app = express.Router()
const products = require('../data/products.json')

app.get('/', async (req, res) => {
    res.send(products)
})

app.get('/:id', async (req, res) => {
    res.send(products.find((i) => i.id === parseInt(req.params.id)))
})

module.exports = app