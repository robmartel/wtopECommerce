import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href='/'>Welcome To Our Porch</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <InputGroup>
              <DropdownButton
                id='dropdown-basic-button'
                title='All'
              >
                <Dropdown.Item>Rounds</Dropdown.Item>
                <Dropdown.Item>Door Leaner</Dropdown.Item>
                <Dropdown.Item>Door Mats</Dropdown.Item>
                <Dropdown.Item>Wreaths</Dropdown.Item>
                <Dropdown.Item>Decorative Pillows</Dropdown.Item>
                <Dropdown.Item>Baby | Children</Dropdown.Item>
                <Dropdown.Item>Pets</Dropdown.Item>
                <Dropdown.Item>Workshops</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                type='text'
                placeholder='Search in shop ...'
              />
              <Button variant='warning'>
                <i className='bi bi-search text-dark'></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to='/admin/orders'>
              <Nav.Link>
                Admin
                <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown
              title='Ace Ventura'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item
                eventKey='/user/my-orders'
                as={Link}
                to='/user/my-orders'
              >
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey='/user/'
                as={Link}
                to='/user'
              >
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <Badge bg='danger'>2</Badge>
                <i className='bi bi-cart-dash'></i><span className='ms-1'>CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
