import React from 'react';
import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: 'pointer',
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin='anonymous'
          className='d-block w-100'
          style={{ height: '300px', objectFit: 'cover' }}
          src='/images/carousel/carousel-1.png'
          alt='First slide'
        />
        <Carousel.Caption>
          <LinkContainer
            style={cursorP}
            to='/product-details'
          >
            <h3>Best Seller in Rounds Category</h3>
          </LinkContainer>
          <p>At The Lake, 18" 3D, Door Round, made from 1/4" Baltic Birch.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '300px', objectFit: 'cover' }}
          src='/images/carousel/carousel-2.png'
          alt='Second slide'
        />

        <Carousel.Caption>
          <LinkContainer
            style={cursorP}
            to='/product-details'
          >
            <h3>Best Seller in Door Mat Category</h3>
          </LinkContainer>
          <p>Large durable door Mat, "Please Hide from Husband".</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style={{ height: '300px', objectFit: 'cover' }}
          src='/images/carousel/carousel-3.png'
          alt='Third slide'
        />

        <Carousel.Caption>
          <LinkContainer
            style={cursorP}
            to='/product-details'
          >
            <h3>Best Seller in Signs Category</h3>
          </LinkContainer>
          <p>
            Hand Crafted and Painted bathroom sign. 16" x 24"; Birch and Pine.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
