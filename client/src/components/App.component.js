import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import MyNavbar from './MyNavbar.component'
import Notification, { notify } from './Notification.component'
import TitleJumbotron from './TitleJumbotron.component'
import SavedBooks from '../pages/SavedBooks.component'
import SearchBooks from '../pages/SearchBooks.component'
import '../assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  newNotify = (msg) => {
    notify(msg)
  }

  render () {
    return (
      <Router>
        <MyNavbar />
        <Notification />
        <Container>
          <TitleJumbotron />
          <Redirect exact path='/' to='/search' />
          <Route path='/search' render={props => <SearchBooks notify={this.newNotify} />} />
          <Route path='/saved' render={props => <SavedBooks notify={this.newNotify} />} />
        </Container>
      </Router>
    )
  }
}

export default App
