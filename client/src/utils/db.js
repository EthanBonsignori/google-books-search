const db = {
  getBooks: async () => {
    const fetchRes = await window.fetch('http://localhost:4000/books', { method: 'GET' })
    const content = await fetchRes.json()
    return content
  },

  saveBook: async (book) => {
    const fetchRes = await window.fetch('http://localhost:4000/books', {
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
    const fetchRes = await window.fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE' })
    const status = await fetchRes.json()
    console.log(status)
    return status
  }
}

export default db
