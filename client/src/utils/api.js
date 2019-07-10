const searchGoogleBooks = async (query) => {
  const url = `/api/${query}`
  const fetchRes = await window.fetch(url)
  const content = await fetchRes.json()
  return content
}

export default searchGoogleBooks
