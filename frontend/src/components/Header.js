import React from 'react'
import { Navbar, Nav, Container, NavbarCollapse } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {
  return (
<header>
<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect> 
{/* lg will help hamburger menu show up , md will not show hamburger menu until you go smaller*/}

<Container>
    <Navbar.Brand href="/" > Ecomm hub</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="ms-auto">
            {/* ms-auto aligns to the right */}
            <Nav.Link href="/cart"><FaShoppingCart />Cart</Nav.Link>

        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>


</header>
    )
}

export default Header