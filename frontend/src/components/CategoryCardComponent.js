import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    '/images/games-category.png',
    '/images/monitors-category.png',
    '/images/tablets-category.png',
    '/images/games-category.png',
    '/images/monitors-category.png',
    '/images/tablets-category.png',
    '/images/games-category.png',
    '/images/monitors-category.png',
  ];
  return (
    <Card>
      <Card.Img
        //   this style can be changed or deleted, i just changed it for the current pictures
        style={{ height: '600px', objectFit: 'cover' }}
        crossOrigin='anonymous'
        variant='top'
        src={images[idx]}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to='/product-list'>
          <Button variant='primary'>Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
