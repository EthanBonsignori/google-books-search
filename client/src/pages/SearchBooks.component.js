import React, { Component } from 'react'
import _ from 'lodash'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { searchGoogleBooks } from '../utils/api'
import BookCard from '../components/BookCard.component'

class SearchBooks extends Component {
  constructor (props) {
    super(props)

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
    const content = await searchGoogleBooks(query)
    if (content.error) return this.props.notify(content.message)
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
        notify={this.props.notify}
      />
    })
    return (
      <div>
        <Card style={cardStyle}>
          <Card.Header>
            <FontAwesomeIcon icon={faBook} />
            {' '}Book Search
          </Card.Header>
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
          <Card.Header>
            <FontAwesomeIcon icon={faBookOpen} />
            {' '}Results
          </Card.Header>
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
