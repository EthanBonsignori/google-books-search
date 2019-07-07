import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

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
              <Form.Control type='submit' value='Search' className='btn btn-primary' />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default SearchBooks
