import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import MyNavbar from './components/MyNavbar.component'
import SavedBooks from './components/SavedBooks.component'
import SearchBooks from './components/SearchBooks.component'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <MyNavbar />
        <Container>
          <Redirect exact path='/' to='/search' />
          <Route path='/search' component={SearchBooks} />
          <Route path='/saved' component={SavedBooks} />
        </Container>
      </Router>
    )
  }
}

export default App
