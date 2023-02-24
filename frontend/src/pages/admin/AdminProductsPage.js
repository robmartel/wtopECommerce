import React from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';

const deleteHandler = () => {
  if(window.confirm("Are you sure you want to delete product?")) alert("Product deleted!")
}

const AdminProductsPage = () => {
  return (
    <Row className='m-5'>
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Product List{' '}
          <LinkContainer to='/admin/create-new-product'>
            <Button
              variant='primary'
              size='lg'
            >
              Create New
            </Button>
          </LinkContainer>
        </h1>
        <Table
          striped
          bordered
          hover
          responsive
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Panosonic', price: '$250', category: 'TV' },
              { name: 'Lenovo', price: '$1000', category: 'Laptops' },
              { name: 'Mario Kart', price: '$50', category: 'Games' },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/edit-product">
                  <Button className="btn-sm">
                  <i className="bi bi-pencil-square"></i>
                  </Button>
                  </LinkContainer>
                  {" / "}
                  <Button className="btn-sm" variant="danger" onClick={deleteHandler}>
                  <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProductsPage;
