import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  };

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
          <h1>User Profile</h1>
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
                // defaultValue will be changed to a dynamic value, for now I will use John
                defaultValue='John'
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
                defaultValue='Doe'
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
                disabled
                value='john@doe.com, if you want to change your email, remove your existing account, and then create a new one with the new email address' //need to figure out this functionality later
              />
            </Form.Group>

            {/* Phone */}
            <Form.Group
              className='mb-3'
              controlId='formBasicPhone'
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='text'
                defaultValue=''
                placeholder='Enter your phone number'
              />
            </Form.Group>

                  {/* Address */}
                  <Form.Group
              className='mb-3'
              controlId='formBasicAddress'
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                defaultValue=''
                placeholder='Enter your street name and house number'
              />
            </Form.Group>

                      {/* Country */}
                      <Form.Group
              className='mb-3'
              controlId='formBasicCountry'
            >
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                defaultValue=''
                placeholder='Enter your Country'
              />
            </Form.Group>

                      {/* Zip */}
                      <Form.Group
              className='mb-3'
              controlId='formBasicZip'
            >
              <Form.Label>Postal/Zip Code</Form.Label>
              <Form.Control
                type='text'
                defaultValue=''
                placeholder='Enter your Postal/Zip Code'
              />
            </Form.Group>

                      {/* City */}
                      <Form.Group
              className='mb-3'
              controlId='formBasicCity'
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                defaultValue=''
                placeholder='Enter your city'
              />
            </Form.Group>

                      {/* Province/State */}
                      <Form.Group
              className='mb-3'
              controlId='formBasicState'
            >
              <Form.Label>Province/State</Form.Label>
              <Form.Control
                type='text'
                defaultValue=''
                placeholder='Enter your province/state'
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
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className='text-muted'>
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

            <Button variant="primary" type='submit'>Update</Button>
            <Alert
              show={true}
              variant='danger'
            >
              User with that email already exists!
            </Alert>
            <Alert
              show={true}
              variant='info'
            >
              User Updated
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
