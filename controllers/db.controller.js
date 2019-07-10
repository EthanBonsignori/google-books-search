const Book = require('../models/Book.model')

module.exports = {
  findAll: (req, res) => {
    Book.find((err, books) => {
      if (!books) return res.status(404).json({ message: 'No saved books found.' })
      if (err) return res.status(400).json({ message: `${err.name} | Error retrieving saved books` })
      res.status(200).json(books)
    })
  },
  create: (req, res) => {
    if (!req.body) return res.status(400).json({ message: 'Error saving book | Did not receive any data' })
    const newBook = new Book(req.body)
    newBook.save()
      .then(book => { res.status(200).json({ message: `${book.title} added to saved books` }) })
      .catch(err => {
        let errmsg = ''
        if (err.code === 11000) errmsg = `${req.body.title} is already in saved books`
        else errmsg = err.name
        res.status(400).json({ message: errmsg })
      })
  },
  remove: (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, book) => {
      if (!book) return res.status(404).json({ message: 'No saved book found with that ID' })
      if (err) return res.status(400).json({ message: `${err.name} | Removing saved book failed` })
      else return res.status(200).json({ message: `Removed ${book.title} from saved books` })
    })
  }
}
