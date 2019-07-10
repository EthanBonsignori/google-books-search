const searchGoogleBooks = async (query) => {
  console.log('In searchGoogleBooks')
  const url = `/api/${query}`
  const fetchRes = await window.fetch(url)
  const content = await fetchRes.json()
  console.log('Content from searchGoogleBooks:')
  console.log(content)
  return content
}

export default searchGoogleBooks
