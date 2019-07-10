import React, { Component } from 'react'
import _ from 'lodash'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BookCard from '../components/BookCard.component'

class SearchBooks extends Component {
  constructor () {
    super()

    this.state = {
      query: ''
    }

    this.onChangeSearchInput = this.onChangeSearchInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeSearchInput (e) {
    this.setState({
      query: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault()
    this.search(this.state.query)
    this.setState({
      query: ''
    })
  }

  async search (query) {
    let url
    // if (process.env.NODE_ENV === 'production') url = `/api/${query}`
    url = `http://localhost:4000/api/${query}`
    const fetchRes = await window.fetch(url, { method: 'GET', 'Content-Type': 'application/json' })
    const content = await fetchRes.json()
    console.log(content)
    this.setState({ books: content.items })
  }

  render () {
    const cardStyle = { marginTop: '3rem' }
    const books = _.map(this.state.books, (book) => {
      const bookInfo = book.volumeInfo
      let hasImage = true
      if (bookInfo.imageLinks === undefined) hasImage = false
      return <BookCard key={book.id}
        authors={bookInfo.authors}
        description={bookInfo.description}
        fromSaved={false}
        image={hasImage ? bookInfo.imageLinks.thumbnail : 'false'}
        link={bookInfo.infoLink}
        title={bookInfo.title}
      />
    })
    return (
      <div>
        <Card style={cardStyle}>
          <Card.Header>Book Search</Card.Header>
          <Card.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId='formGroupSearch'>
                <Form.Control type='text'
                  placeholder='Search for books...'
                  value={this.state.searchInput}
                  onChange={this.onChangeSearchInput} />
              </Form.Group>
              <Form.Group>
                <Button type='submit' variant='primary' block>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Header>Results</Card.Header>
          <Card.Body>
            <Container>
              {books.length ? books : <span>No Results</span>}
            </Container>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default SearchBooks
