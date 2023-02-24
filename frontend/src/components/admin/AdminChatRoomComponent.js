import React, { Fragment, useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';

const AdminChatRoomComponent = () => {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => closeToast1(false);

  const [toast2, closeToast2] = useState(true);
  const close2 = () => closeToast2(false);
  return (
    <>
      <Toast
        show={toast1}
        onClose={close1}
        className='ms-4 mb-5'
      >
        <Toast.Header>
          <strong className='me-auto'>Chat with John Doe</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: '300px', overflow: 'auto' }}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className='bg-primary p-3 ms-5 text-light rounded-pill'>
                  <b>User wrote:</b> Hello world!
                </p>
                <p className='bg-success p-3 me-5 text-light rounded-pill'>
                  <b>Admin wrote:</b> Hello User!
                </p>
              </Fragment>
            ))}
          </div>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
            >
              Send
            </Button>
          </Form>
        </Toast.Body>
      </Toast>

      <Toast
        show={toast2}
        onClose={close2}
        className='ms-4 mb-5'
      >
        <Toast.Header>
          <strong className='me-auto'>Chat with John Doe</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: '300px', overflow: 'auto' }}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className='bg-primary p-3 ms-5 text-light rounded-pill'>
                  <b>User wrote:</b> Hello world!
                </p>
                <p className='bg-success p-3 me-5 text-light rounded-pill'>
                  <b>Admin wrote:</b> Hello User!
                </p>
              </Fragment>
            ))}
          </div>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control
                as='textarea'
                rows={2}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
            >
              Send
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoomComponent;
