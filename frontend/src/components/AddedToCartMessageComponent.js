import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AddedToCartMessageComponent = () => {
    const [show, setShow] = useState(true); //setting this to true so in development stages we can see it rendered on the screen, eventually this will be false
    
  return (
    <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>The product was added to your cart!</Alert.Heading>
        <p>
            <Button variant="success">Go Back</Button>{" "}
            <Link to="/cart">
            <Button variant="danger">Go To Cart</Button>
            </Link>
            
        </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
