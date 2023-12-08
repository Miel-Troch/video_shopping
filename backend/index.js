const express = require('express')
const cors = require('cors')
var path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const app = express()
app.use(cors())
app.use(express.json())

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:9000', 'http://localhost:62492'],
    exposedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use((req, res, next) => {
  res.setHeader('Acces-Control-Allow-Origin', '*')
  res.setHeader('Acces-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

//api routes
const categoryAPI = require('./api/category')
const videoAPI = require('./api/video')
const productAPI = require('./api/product')
app.use('/api/category', categoryAPI)
app.use('/api/video', videoAPI)
app.use('/api/product', productAPI)

app.use(express.static('files'))
app.use(express.static(path.join(__dirname, '../build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

const PORT = process.env.hostingport
var server = require('http').createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
