const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
    res.send('test')
})

module.exports = app
