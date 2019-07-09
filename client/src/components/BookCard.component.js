import React, { Component } from 'react'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import noThumbnail from '../no-thumbnail.png'

class BookCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authors: [],
      description: '',
      image: '',
      link: '',
      title: ''
    }

    this.saveBook = this.saveBook.bind(this)
  }

  componentDidMount () {
    this.setState({
      authors: this.props.authors,
      description: this.props.description,
      image: this.props.image,
      link: this.props.link,
      title: this.props.title
    })
  }

  async saveBook () {
    const newSavedBook = {
      authors: this.state.authors || 'No author provided',
      description: this.state.description || 'No description provided',
      image: this.state.image,
      link: this.state.link,
      title: this.state.title
    }
    const fetchRes = await window.fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSavedBook)
    })
    const content = await fetchRes.json()
    console.log(content)
  }

  render () {
    let hasImage = true
    if (this.state.image === 'false') hasImage = false

    return (
      <div>
        <Card>
          <Card.Header>
            {this.state.title}
            <span style={{ opacity: '0.8', fontSize: '0.75rem', marginLeft: '1rem' }}>
              {this.state.authors ? `By: ${this.state.authors.join(', ')}` : 'No author provided'}
            </span>
            <div className='float-right'>
              <Button variant='outline-info'
                size='sm'
                href={this.state.link}
                target='_blank'>
                  View
              </Button>{' '}
              <Button variant='outline-primary'
                size='sm'
                onClick={() => this.saveBook()}>
                  Save
              </Button>
            </div>
          </Card.Header>
          <Row style={{ padding: '0.5rem 1rem' }}>
            <Col xs={2} style={{ paddingLeft: '1rem' }}>
              {hasImage ? (
                <Image src={this.state.image} thumbnail fluid />
              ) : (
                <Image src={noThumbnail} thumbnail fluid />
              )}
            </Col>
            <Col xs={10} style={{ paddingLeft: '0', overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '218px' }}>
              {this.state.description || 'No description provided'}
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default BookCard
