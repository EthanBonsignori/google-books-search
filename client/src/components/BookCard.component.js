import React, { Component } from 'react'
import { Col, Card, Image, Button } from 'react-bootstrap'
import noThumbnail from '../no-thumbnail.png'

class BookCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      authors: [],
      description: '',
      image: '',
      link: ''
    }
  }

  componentDidMount () {
    console.log(this.props)
  }

  render (props) {
    return (
      <div>
        <Card>
          <Card.Header>
            {this.props.title}
            <span style={{ opacity: '0.8', fontSize: '0.75rem', marginLeft: '1rem' }}>
              By: {this.props.authors}
            </span>
            <span className='float-right'>
              <Button variant='outline-info' style={{ marginRight: '0.25rem' }}>View</Button>
              <Button variant='outline-primary' style={{ marginLeft: '0.25rem' }}>Save</Button>
            </span>
          </Card.Header>
          <Col xs={6} md={4}>
            {this.props.image ? (
              <Image src={this.props.image} thumbnail />
            ) : (
              <Image src={noThumbnail} thumbnail />
              // <div style={{ width: '138px', height: '205px', backgroundColor: 'grey' }} />
            )}
          </Col>
        </Card>
      </div>
    )
  }
}

export default BookCard
