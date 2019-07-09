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

  componentDidMount (props) {
    console.log(props)
  }

  render (props) {
    return (
      <div>
        <p>{props}</p>
      </div>
    )
  }
}

export default BookCard
