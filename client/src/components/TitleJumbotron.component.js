import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import googleLogo from '../assets/images/google-logo.png'

class TitleJumbotron extends Component {
  render () {
    const style = {
      marginTop: '3rem',
      textAlign: 'center',
      backgroundColor: '#F7F7F7ad'
    }
    return (
      <Jumbotron style={style}>
        <h1>
          <img src={googleLogo} width='125' alt='Google' />
          <span>{' '}</span>
          Books Search
        </h1>
        <p className='lead'>Search for and Save your Favorite Books</p>
        <p className='mt-5 mb-0 font-weight-light'>Powered by{' '}
          <span style={{ color: '#61DAFB', fontWeight: 'bold' }}>
            <FontAwesomeIcon icon={faReact} /> React
          </span>
        </p>
      </Jumbotron>
    )
  }
}

export default TitleJumbotron
