module.exports = {
  searchGoogleBooks: async (query) => {
    const url = `http://localhost:4000/api/${query}`
    const fetchRes = await window.fetch(url)
    const content = await fetchRes.json()
    return content
  }
}
