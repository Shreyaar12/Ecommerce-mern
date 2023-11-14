import React from 'react'
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import logo from '../assets/logo.png'
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import {LinkContainer } from 'react-router-bootstrap';
const Header = () => {
   const { cartItems} = useSelector((state)=> state.cart);
   const { userInfo } = useSelector((state) => state.auth);


   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [ logoutApiCall] = useLogoutMutation();
   const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }}
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
                {
                    cartItems.length>0 && (
                        <Badge pill bg="success" style={{
                            marginLeft: '5px'
                        }}>
{
    cartItems.reduce((a,c)=> a+c.qty, 0)
}
                        </Badge>
                    )
                }
                </Nav.Link>
                </LinkContainer>

                {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>


</header>
    )
}

export default Header;
