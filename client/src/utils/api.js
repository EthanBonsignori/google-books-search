const searchGoogleBooks = async (query) => {
  let url = `/api/${query}`
  if (process.env.NODE_ENV === 'development') url = `http://localhost:4000/api/${query}`
  const fetchRes = await window.fetch(url, { method: 'GET' })
  const content = await fetchRes.json()
  return content
}

export default searchGoogleBooks
