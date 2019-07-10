const router = require('express').Router()
const path = require('path')
const apiRoutes = require('./api.routes')
const dbRoutes = require('./db.routes')

// API Routes
router.use('/api', apiRoutes)
router.use('/books', dbRoutes)

// Send every other request to the React app
router.use((req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
  } else {
    res.sendFile(path.join(__dirname, '/client/public/index.html'))
  }
})

module.exports = router
