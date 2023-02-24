import React from 'react'
import { Col, Row } from 'react-bootstrap';
import AdminChatRoomComponent from '../../components/admin/AdminChatRoomComponent';
import AdminLinksComponent from '../../components/admin/AdminLinksComponent';

const AdminChatPage = () => {
  return (
  <Row className="m-5">
    <Col md={2}>
      <AdminLinksComponent />
    </Col>
    <Col md={10}>
      <Row>
      <AdminChatRoomComponent />
      </Row>
    </Col>
  </Row>
  )
}

export default AdminChatPage
