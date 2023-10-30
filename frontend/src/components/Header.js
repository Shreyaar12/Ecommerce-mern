import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'
import {LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
<header>
<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect> 
{/* lg will help hamburger menu show up , md will not show hamburger menu until you go smaller*/}

<Container>
    <LinkContainer to='/'>
            <Navbar.Brand>Ecomm Hub</Navbar.Brand>
            </LinkContainer>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="ms-auto">
            {/* ms-auto aligns to the right */}
            <LinkContainer to='/cart'>
            <Nav.Link >
                <FaShoppingCart />Cart
                </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
            <Nav.Link >
                <FaUser />Sign In
                </Nav.Link>
                </LinkContainer>

        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>


</header>
    )
}

export default Header
