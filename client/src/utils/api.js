const searchGoogleBooks = async (query) => {
  console.log('In searchGoogleBooks')
  console.log(process.env.NODE_ENV)
  let url = `/api/${query}`
  if (process.env.NODE_ENV === 'development') url = `http://localhost:4000/api/${query}`
  console.log(url)
  const fetchRes = await window.fetch(url, { method: 'GET' })
  const content = await fetchRes.json()
  console.log('Content from searchGoogleBooks:')
  console.log(content)
  return content
}

export default searchGoogleBooks
