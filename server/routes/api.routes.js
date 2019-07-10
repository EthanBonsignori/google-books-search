const router = require('express').Router()
const apiController = require('../controllers/apiController')

// Matches with '/api/:query'
router.route('/:query')
  .get(apiController.search)

module.exports = router
