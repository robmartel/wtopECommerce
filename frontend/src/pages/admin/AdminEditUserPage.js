import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AdminEditUserPage = () => {
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
      <Row className='justify-content-md-center mt-5'>
        <Col md={1}>
          <Link
            to='/admin/users'
            className='btn btn-info my-3'
          >
            Prev
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit User</h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <Form.Group
              className='mb-3'
              controlId='formBasicFirstName'
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name='name'
                required
                type='text'
                defaultValue="Ace"
              />
            </Form.Group>

            {/* Last Name */}
            <Form.Group
              className='mb-3'
              controlId='formBasicLastName'
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name='lastName'
                required
                type='text'
                defaultValue="Ventura"
              />
            </Form.Group>

            {/* Email */}
            <Form.Group
              className='mb-3'
              controlId='formBasicEmail'
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                required
                type='email'
                defaultValue="ace@email.com"
              />
            </Form.Group>

  {/* Is Admin */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="isAdmin" type="checkbox" label="Is admin" />
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant='primary'
              type='submit'
            >
              UPDATE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUserPage;




