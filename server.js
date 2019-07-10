const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
})

mongoose.connection.once('open', () => {
  console.log('MongoDB connection established')
})

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})
