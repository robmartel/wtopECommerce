import React, { useState } from 'react';
import {
  Alert,
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  Row,
  Table,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const onHover = {
  cursor: 'pointer',
  position: 'absolute',
  left: '5px',
  top: '-10px',
  transform: 'scale(2.7)',
};

const AdminEditProductPage = () => {
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
            to='/admin/products'
            className='btn btn-info my-3'
          >
            Prev
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit Product</h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <Form.Group
              className='mb-3'
              controlId='formBasicName'
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                name='name'
                required
                type='text'
                defaultValue='Panasonic'
              />
            </Form.Group>

            {/* Description */}
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name='description'
                required
                as='textarea'
                rows={3}
                defaultValue='Product Description'
              />
            </Form.Group>

            {/* In Stock */}
            <Form.Group
              className='mb-3'
              controlId='formBasicCount'
            >
              <Form.Label>Count in Stock</Form.Label>
              <Form.Control
                name='count'
                required
                type='number'
                defaultValue='10'
              />
            </Form.Group>

            {/* Price */}
            <Form.Group
              className='mb-3'
              controlId='formBasicPrice'
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                name='price'
                required
                type='text'
                defaultValue='$65'
              />
            </Form.Group>

            {/* Category */}
            <Form.Group
              className='mb-3'
              controlId='formBasicCategory'
            >
              <Form.Label>Category</Form.Label>
              <Form.Select
                name='category'
                required
                aria-label='Default select example'
              >
                <option value=''>Choose Category</option>
                <option value='1'>Laptops</option>
                <option value='2'>TV</option>
                <option value='3'>Games</option>
              </Form.Select>
            </Form.Group>

            {/* Attributes */}
            <Row className='mt-5'>
              <Col md={6}>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicAttributes'
                >
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name='attrKey'
                    aria-label='Default select example'
                  >
                    <option>Choose attribute</option>
                    <option value='red'>color</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicAttributeValue'
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Select
                    name='attrVal'
                    aria-label='Default select example'
                  >
                    <option>Choose attribute value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attributes</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicNewAttribute'
                >
                  <Form.Label>Create new attribute</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder='first, choose or create a category'
                    name='newAttrValue'
                    type='text'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicNewAttributeValue'
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder='first, choose or create a category'
                    required={true}
                    name='newAttrValue'
                    type='text'
                  />
                </Form.Group>
              </Col>
            </Row>

            <Alert variant='primary'>
              After typing attribute key and value press enter on one of the
              fields
            </Alert>

            {/* Images */}
            <Form.Group
              controlId='formFileMultiple'
              className='mb-3 mt-3'
            >
              <Form.Label>Images</Form.Label>
              <Row>
                <Col
                  style={{ position: 'relative' }}
                  xs={3}
                >
                  <Image
                    crossOrigin='anonymous'
                    src='/images/monitors-category.png'
                    fluid
                  />
                  <i
                    style={onHover}
                    className='bi bi-x text-danger'
                  ></i>
                </Col>
                <Col
                  style={{ position: 'relative' }}
                  xs={3}
                >
                  <Image
                    src='/images/monitors-category.png'
                    fluid
                  />
                  <i
                    style={onHover}
                    className='bi bi-x text-danger'
                  ></i>
                </Col>
              </Row>
              <Form.Control
                required
                type='file'
                multiple
              />
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

export default AdminEditProductPage;
