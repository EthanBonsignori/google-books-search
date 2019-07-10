const db = {
  getBooks: async () => {
    console.log('In db.getBooks')
    const fetchRes = await window.fetch('/books', { method: 'GET' })
    const content = await fetchRes.json()
    console.log('Content from db.getBooks:')
    console.log(content)
    return content
  },

  saveBook: async (book) => {
    console.log('In db.saveBook')
    const fetchRes = await window.fetch('/books', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    const status = await fetchRes.json()
    console.log('Content from db.saveBook:')
    console.log(status)
    return status
  },

  unsaveBook: async (id) => {
    console.log('In db.unsaveBook')
    const fetchRes = await window.fetch(`/books/${id}`, { method: 'DELETE' })
    const status = await fetchRes.json()
    console.log('Content from db.unsaveBook:')
    console.log(status)
    return status
  }
}

export default db
