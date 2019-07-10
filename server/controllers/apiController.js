const fetch = require('node-fetch')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  search: async (req, res) => {
    const query = req.params.query
    console.log(query)
    const API_KEY = process.env.GOOGLE_BOOKS_API_KEY
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query || 'Harry Potter'}&key=${API_KEY}`
    const fetchRes = await fetch(url)
    const apiRes = await fetchRes.json()
    console.log(apiRes)
    res.status(200).json(apiRes)
  }
}
