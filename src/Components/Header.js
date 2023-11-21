import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/images/logo.png'

export const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='bg-body-white'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src={logo}
              width='100'
              height='100'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#menu'>Menu</Nav.Link>
              <Nav.Link href='#menu'>About Us</Nav.Link>
              <Nav.Link href='#menu'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Header
