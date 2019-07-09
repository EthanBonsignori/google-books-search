import React, { Component } from 'react'
import _ from 'lodash'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BookCard from './BookCard.component.js'

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

  search (query) {
    const API_KEY = process.env.REACT_APP_BOOKS_API_KEY
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query || 'Harry Potter'}&key=${API_KEY}`
    window.fetch(url, { method: 'GET' })
      .then(results => {
        return results.json()
      })
      .then(booksJson => {
        this.setState({
          books: booksJson.items
        })
      })
      .catch(err => {
        console.error(err)
      })
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
        image={hasImage ? bookInfo.imageLinks.thumbnail : false}
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
