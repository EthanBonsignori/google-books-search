const db = {
  getBooks: async () => {
    console.log('In db.getBooks')
    console.log('NODE_ENV:')
    console.log(process.env.NODE_ENV)
    let url = '/books'
    // if (process.env.NODE_ENV === 'development') url = 'http://localhost:4000/books'
    const fetchRes = await window.fetch(url, { method: 'GET' })
    const content = await fetchRes.json()
    console.log('Content from db.getBooks:')
    console.log(content)
    return content
  },

  saveBook: async (book) => {
    console.log('In db.saveBook')
    let url = '/books'
    // if (process.env.NODE_ENV === 'development') url = 'http://localhost:4000/books'
    const fetchRes = await window.fetch(url, {
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
    let url = `/books${id}`
    // if (process.env.NODE_ENV === 'development') url = `http://localhost:4000/books/${id}`
    const fetchRes = await window.fetch(url, { method: 'DELETE' })
    const status = await fetchRes.json()
    console.log('Content from db.unsaveBook:')
    console.log(status)
    return status
  }
}

export default db
