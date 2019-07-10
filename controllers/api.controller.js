const fetch = require('node-fetch')
require('dotenv').config()

module.exports = {
  search: async (req, res) => {
    console.log('in api.controller:')
    const query = req.params.query
    const API_KEY = process.env.GOOGLE_BOOKS_API_KEY
    console.log('query', query)
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query || 'Harry Potter'}&key=${API_KEY}`
    console.log('url', url)
    const fetchRes = await fetch(url)
    if (fetchRes._hadError === true) return res.status(400).json({ message: 'Error searching Google Books API', error: true })
    const apiRes = await fetchRes.json()
    res.status(200).json(apiRes)
  }
}
