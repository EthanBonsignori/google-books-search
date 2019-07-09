import React, { Component } from 'react'
import _ from 'lodash'
import { Container, Card } from 'react-bootstrap'
import BookCard from './BookCard.component.js'

class SavedBooks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: null,
      update: 0
    }

    this.getBooksFromDb = this.getBooksFromDb.bind(this)
  }

  componentDidMount () {
    this.getBooksFromDb()
  }

  async getBooksFromDb () {
    const fetchRes = await window.fetch('http://localhost:4000/books', { method: 'GET' })
    const content = await fetchRes.json()
    this.setState({
      books: content
    })
  }

  render () {
    const books = _.map(this.state.books, (book) => {
      let hasImage = true
      if (book.image === 'false') hasImage = false
      return <BookCard key={book._id}
        id={book._id}
        authors={book.authors}
        description={book.description}
        fromSaved
        image={hasImage ? book.image : 'false'}
        link={book.infoLink}
        title={book.title}
        getBooksFromDb={this.getBooksFromDb}
      />
    })

    return (
      <div>
        <Card style={{ marginTop: '3rem' }}>
          <Card.Header>Results</Card.Header>
          <Card.Body>
            <Container>
              {books.length ? books : <span>No saved books</span>}
            </Container>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default SavedBooks
