import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
   <footer>
     <Container fluid>
      <Row className="mt-5">
        <Col className="bg-dark text-light text-center py-5">Copyright &copy; Welcome To Our Porch</Col>
      </Row>
    </Container>
   </footer>
  );
};

export default FooterComponent;
