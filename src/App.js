import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import SavedBooks from './components/SavedBooks.component'
import SearchBooks from './components/SearchBooks.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './logo.png'

class App extends Component {
  render () {
    return (
      <Router>
        <Container>
          <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>
              <img src={logo} width='30' height='30' />
            </Navbar.Brand>
            <Navbar.Brand href='/'>Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/search'>Search</Nav.Link>
                <Nav.Link href='/saved'>Saved</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact component={SavedBooks} />
          <Route path='/search' exact component={SearchBooks} />
          <Route path='/saved' exact component={SavedBooks} />
        </Container>
      </Router>
    )
  }
}

export default App
