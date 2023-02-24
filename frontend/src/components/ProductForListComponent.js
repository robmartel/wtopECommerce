import { Card, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating';

const ProductForListComponent = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: '30px', marginBottom: '50px' }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            crossOrigin='anonymous'
            variant='top'
            src={'/images/' + images[idx] + '-category.png'}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name Example</Card.Title>
            <Card.Text>
              This is some text that means nothing right now but will mean
              something at some point when we change it to mean something.
              Thanks for reading.
            </Card.Text>
            <Card.Text>
              <Rating
                readonly
                size={20}
                initialValue={5}
              />{' '}
              (100)
            </Card.Text>
            <Card.Text className='h4'>
              $65{' '}
              <LinkContainer to='/product-details'>
                <Button variant='danger'>See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
