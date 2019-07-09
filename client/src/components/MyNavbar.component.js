import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../logo.png'

class MyNavbar extends Component {
  render () {
    return (
      <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand href='/'>
          <img src={logo} width='30' height='30' alt='Books' />
        </Navbar.Brand>
        <Navbar.Brand href='/'>Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Item>
              <NavLink to='/search' className='nav-link'>Search</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/saved' className='nav-link'>Saved</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNavbar