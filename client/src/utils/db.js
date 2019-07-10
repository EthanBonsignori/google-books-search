const db = {
  getBooks: async () => {
    let url = '/books'
    if (process.env.NODE_ENV === 'development') url = 'http://localhost:4000/books'
    const fetchRes = await window.fetch(url, { method: 'GET' })
    const content = await fetchRes.json()
    return content
  },

  saveBook: async (book) => {
    let url = '/books'
    if (process.env.NODE_ENV === 'development') url = 'http://localhost:4000/books'
    const fetchRes = await window.fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    const status = await fetchRes.json()
    return status
  },

  unsaveBook: async (id) => {
    let url = `/books/${id}`
    if (process.env.NODE_ENV === 'development') url = `http://localhost:4000/books/${id}`
    const fetchRes = await window.fetch(url, { method: 'DELETE' })
    const status = await fetchRes.json()
    return status
  }
}

export default db
