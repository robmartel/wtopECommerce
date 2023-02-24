import React from 'react';
import {
  Alert,
  Col,
  Container,
  Row,
  Form,
  ListGroup,
  Button,
} from 'react-bootstrap';
import CartItemComponent from '../../components/CartItemComponent';

const UserOrderDetailsPage = () => {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: John Doe <br />
              <b>Address</b>: 123 ABC Street. Montreal, Quebec, N9I 8H9 <br />
              <b>Phone</b>: 888-968-6895 <br />
            </Col>
            <Col md={6}>
              <h2>Payment Method</h2>
              <Form.Select disabled={false}>
                <option value='pp'>PayPal</option>
                <option value='cod'>
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert
                  className='mt-3'
                  variant='danger'
                >
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert
                  className='mt-3'
                  variant='success'
                >
                  Paid on 2029-06-25
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order Items</h2>
          <ListGroup variant='flush'>
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item Price (tax incl.): <span className='fw-bold'>$134</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className='fw-bold'>Free</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className='fw-bold'>Included</span>
            </ListGroup.Item>
            <ListGroup.Item className='text-danger'>
              Total Price: <span className='fw-bold'>$134</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
              <Button
                size='lg'
                variant='danger'
                type='button'
              >
                Pay Now
              </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPage;
