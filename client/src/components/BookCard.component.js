import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'

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
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default BookCard
