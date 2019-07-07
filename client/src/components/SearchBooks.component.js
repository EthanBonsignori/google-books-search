import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const API_KEY = process.env.REACT_APP_BOOKS_API_KEY

class SearchBooks extends Component {
  constructor (props) {
    super(props)

    this.onChangeSearchInput = this.onChangeSearchInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      searchInput: ''
    }
  }

  onChangeSearchInput (e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault()

    console.log(`Search input: ${this.state.searchInput}`)
    console.log(API_KEY)

    this.setState({
      searchInput: ''
    })
  }

  render () {
    return (
      <Card style={{ marginTop: '3rem' }}>
        <Card.Header>Book Search</Card.Header>
        <Card.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId='formGroupSearch'>
              <Form.Control type='text'
                placeholder='Book title'
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
    )
  }
}

export default SearchBooks
