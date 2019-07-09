import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

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
          <p>{this.props.title}</p>
        </Card>
      </div>
    )
  }
}

export default BookCard
