const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const Book = require('./schema/Book.model')
const app = express()
const bookRoutes = express.Router()
const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'

// Middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use('/books', bookRoutes)

// Routes
bookRoutes.route('/').get((req, res) => {
  Book.find((err, books) => {
    if (!books) return res.status(404).json({ message: 'No saved books found.' })
    if (err) return res.status(400).json({ message: `${err.name} | Error when retrieving saved books` })
    else res.status(200).json(books)
  })
})

bookRoutes.route('/').post((req, res) => {
  if (!req.body) return res.status(400).json({ message: 'Error when saving book | Did not receive any data' })
  const book = new Book(req.body)
  book.save()
    .then(book => {
      res.status(200).json({ message: `${book.title} saved successfully` })
    })
    .catch(err => {
      let errmsg = ''
      if (err.code === 11000) errmsg = `${req.body.title} is already in saved books`
      else errmsg = err.name
      res.status(400).json({ message: errmsg })
    })
})

// bookRoutes.route('/:id').put((req, res) => {
//   const isSaved = req.body.saved
//   Book.findByIdAndUpdate(req.params.id, (err, book) => {
//     if (!book) return res.status(404).json({ message: 'No saved book found with that ID' })
//     if (err) return res.status(400).json({ message: 'Updating saved book failed', error: err.name })
//     else res.status(200).json({ message: 'Successfully updated book' })
//   })
// })

bookRoutes.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id, (err, book) => {
    if (!book) return res.status(404).json({ message: 'No saved book found with that ID' })
    if (err) return res.status(400).json({ message: `${err.name} | Removing saved book failed` })
    else return res.status(200).json({ message: `Successfully removed ${book.title} from saved books` })
  })
})

// Send every other request to the React app
app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '../client/build/index.html'))
  // Pre build
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

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
