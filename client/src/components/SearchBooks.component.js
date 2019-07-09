import React, { Component } from 'react'
import _ from 'lodash'
import { Card, Form, Button } from 'react-bootstrap'
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

  componentWillMount () {

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
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query || ''}&key=${API_KEY}`
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
      return <li>{book.volumeInfo.title}</li>
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
            <ul>{books}</ul>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default SearchBooks
