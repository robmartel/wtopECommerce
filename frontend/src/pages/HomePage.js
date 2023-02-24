import React from 'react';
import { Row, Container } from 'react-bootstrap';
import CategoryCardComponent from '../components/CategoryCardComponent';
import ProductCarouselComponent from '../components/ProductCarouselComponent';

const HomePage = () => {
  const categories = [
    'Rounds',
    'Door Mats',
    'Indoor Signs',
    'Pets',
    'Baby',
    'Door Leaner',
    'Decorative Pillows',
    'Trays',
  ];

  return (
    <>
      <ProductCarouselComponent />
      <Container>
      <Row
        xs={1}
        md={2}
        className='g-4 mt-5'
      >
        {categories.map((category, idx) => (
          <CategoryCardComponent key={idx} category={category} idx={idx} />
        ))}
      </Row>
      </Container>
    </>
  );
};

export default HomePage;
