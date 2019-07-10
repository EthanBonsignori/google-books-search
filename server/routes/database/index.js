const router = require('express').Router()
const dbRoutes = require('./db')

// Database routes
router.use('/books', dbRoutes)

module.exports = router
