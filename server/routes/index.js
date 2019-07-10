const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')
const bookRoutes = require('./database')

// API Routes
router.use('/api', apiRoutes)
router.use('/books', bookRoutes)

// Send every other request to the React app
router.use((req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
  } else {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'))
  }
})

module.exports = router
