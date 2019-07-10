const router = require('express').Router()
const apiController = require('../../controllers/apiController')

// Matches with "/api/books"
router.route('/:query')
  .get(apiController.search)

module.exports = router
