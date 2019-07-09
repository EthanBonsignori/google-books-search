import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import googleLogo from '../google-logo.png'

class TitleJumbotron extends Component {
  render () {
    return (
      <Jumbotron style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h1>
          <img src={googleLogo} width='125' alt='Google' />
          <span>{' '}</span>
          Books Search
        </h1>
        <p className='lead'>Search for and Save your Favorite Books</p>
        <p className='mt-5 mb-0'>Powered by{' '}
          {/* <img src={reactLogo} width='20' alt='React' /> */}
          <span style={{ color: '#61DAFB', fontWeight: 'bold' }}>
            <FontAwesomeIcon icon={faReact} /> React
          </span>
        </p>
      </Jumbotron>
    )
  }
}

export default TitleJumbotron
