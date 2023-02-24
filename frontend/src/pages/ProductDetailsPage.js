import React, { useEffect } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import AddedToCartMessageComponent from '../components/AddedToCartMessageComponent';
import ImageZoom from 'js-image-zoom';

const ProductDetailsPage = () => {
  var options = {
    scale: 2,
    // width: 400,
    // zoomWidth: 500,
    offset: { vertical: 0, horizontal: 0 }
  };

  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });

  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className='mt-5'>
        <Col style={{zIndex: 1}} md={4}>
          <div id='first'>
            <Image
            crossOrigin="anonymous"
              fluid
              src='/images/games-category.png'
            />
          </div>
          <br />
          <div id='second'>
            <Image
              fluid
              src='/images/monitors-category.png'
            />
          </div>
          <br />
          <div id='third'>
            <Image
              fluid
              src='/images/tablets-category.png'
            />
          </div>
          <br />
          <div id='fourth'>
            <Image
              fluid
              src='/images/games-category.png'
            />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    readonly
                    size={20}
                    initialValue={4}
                  />{' '}
                  (100)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price:<span className='fw-bold'>$65</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price:<span className='fw-bold'>$65</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select
                    size='lg'
                    aria-label='Default select example'
                  >
                    <option>1</option>
                    <option value='1'>2</option>
                    <option value='2'>3</option>
                    <option value='3'>4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant='danger'>Add To Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className='mt-5'>
              <h5>REVIEWS</h5>
              <ListGroup variant='flush'>
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    <Rating
                      readonly
                      size={20}
                      initialValue={4}
                    />{' '}
                    <br />
                    date <br />
                    This is a review of the product, and it was just so
                    wonderful but i just could not give it a 5
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant='danger'>Login to write a review</Alert>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlInput1'
            ></Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Write a Review</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Form.Select aria-label='Default Select example'>
              <option>Your Rating</option>
              <option value='5'>5 (Excellent)</option>
              <option value='4'>4 (Very Good)</option>
              <option value='3'>3 (Average)</option>
              <option value='2'>2 (Poor)</option>
              <option value='1'>1 (Garbage)</option>
            </Form.Select>
            <Button
              className='mb-3 mt-3'
              variant='primary'
            >
              Submit Review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
