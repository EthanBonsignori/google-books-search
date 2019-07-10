const router = require('express').Router()
const apiRoutes = require('./api.routes')
const dbRoutes = require('./db.routes')

// API Routes
router.use('/api', apiRoutes)
router.use('/books', dbRoutes)

module.exports = router
