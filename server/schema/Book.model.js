const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  title: {
    type: String
  }
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book
