const express = require('express')
const app = express.Router()
const categorys = require('../data/categorys.json')

app.get('/', async (req, res) => {
    res.send(categorys)
})
app.get('/:id', async (req, res) => {
    res.send(categorys.find((i) => i.id === parseInt(req.params.id)))
})

module.exports = app
