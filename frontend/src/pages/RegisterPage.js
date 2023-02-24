import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");
    if (confirm.value === password.value) {
      confirm.setCustomValidity("")
    } else {
      confirm.setCustomValidity("Passwords do not match")
    }
  }

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
          <h1>Register</h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <Form.Group
              className='mb-3'
              controlId='validationCustom01'
            >
              <Form.Label>Your name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter Your Name'
                name='name'
              />
              <Form.Control.Feedback type='invalid'>
                Please Enter a name
              </Form.Control.Feedback>
            </Form.Group>

            {/* Last Name */}
            <Form.Group
              className='mb-3'
              controlId='formBasicLastName'
            >
              <Form.Label>Enter Your Last name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Last name'
                name='lastName'
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your last name
              </Form.Control.Feedback>
            </Form.Group>

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
              <Form.Control.Feedback type='invalid'>
                Please enter a valid email address
              </Form.Control.Feedback>
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
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password should have at least 6 characters
              </Form.Text>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group
              className='mb-3'
              controlId='formBasicPasswordRepeat'
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type='invalid'>
                Both passwords should match
              </Form.Control.Feedback>
            </Form.Group>

            <Row className='pb-2'>
              <Col>
                Already have an account?
                <Link to='/login'> Sign In </Link>
              </Col>
            </Row>

            <Button type='submit'>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />{" "}
              Submit
            </Button>
            <Alert show={true} variant="danger">User with that email already exists!</Alert>
            <Alert show={true} variant="info">User created</Alert>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
