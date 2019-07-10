const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const app = express()

// Middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
} else {
  require('dotenv').config()
}

// Send every other request to the React app
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'
mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
})

mongoose.connection.once('open', () => {
  console.log('MongoDB connection established')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})
