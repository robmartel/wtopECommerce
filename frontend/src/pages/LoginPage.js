import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className='mt-5 justify-content-md-center'>
        <Col md={6}>
          <h1>Login</h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <Form.Group
              className='mb-3'
              controlId='formBasicEmail'
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type='email'
                placeholder='Enter a valid email address'
                name='email'
              />
            </Form.Group>

            {/* Password */}
            <Form.Group
              className='mb-3'
              controlId='formBasicPassword'
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Password'
                name='password'
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className='text-muted'>
                Password should have at least 6 characters
              </Form.Text>
            </Form.Group>

            {/* Checkbox */}
            <Form.Group
              className='mb-3'
              controlId='formBasicCheckbox'
            >
              <Form.Check
                type='checkbox'
                name='doNotLogout'
                label='Keep me signed in'
              />
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant='primary'
              type='submit'
              className="mb-3"
            >
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />{' '}
              Login
            </Button>
            <Alert
              show={true}
              variant='danger'
            >
              Email or password not found!
            </Alert>
            {/* Register now */}
            <Row className='pb-2'>
              <Col>
                New to this site?
                <Link to='/register'> Sign Up </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
