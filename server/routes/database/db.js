const router = require('express').Router()
const booksController = require('../../controllers/dbController')

// Matches with "/books"
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create)

// Matches with "/books/:id"
router.route('/:id')
  .delete(booksController.remove)

module.exports = router
