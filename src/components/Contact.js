import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contact from '../Assets/contact1.png';
import Tilt from "react-parallax-tilt";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const openGmail = () => {
    if (message.length === 0) {
      return toast.warning('Please enter message');
    }
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=praveenmathi824@gmail.com&su=PORTFOLIO&body=${encodeURIComponent(message)}`;
    window.open(gmailUrl, '_blank');
    setMessage('');
    // toast.success('Opening Gmail compose...');
  };

  const openOutlook = () => {
    if (message.length === 0) {
      return toast.warning('Please enter message');
    }
    const outlookUrl = `https://outlook.live.com/owa/?path=/mail/action/compose&to=praveenmathi824@gmail.com&subject=PORTFOLIO&body=${encodeURIComponent(message)}`;
    window.open(outlookUrl, '_blank');
    setMessage('');
    // toast.success('Opening Outlook compose...');
  };

  return (
    <Container fluid style={{ color: 'white' }}>
      <h1 className="project-heading text-center">
        Contact <strong className="purple">Me</strong>
      </h1>
      <Row className="justify-content-center">
        <Col md={8} lg={6} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
          <Tilt>
            <img
              className="img-fluid"
              style={{ cursor: 'pointer' }}
              src={contact}
              alt="Contact"
            />
          </Tilt>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <Form className="w-100 p-3 mt-5" style={{ maxWidth: '500px' }}>
            <Form.Group className="mb-5" controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '100%' }}
              />
            </Form.Group>
            <div className="d-flex gap-3">
              <Button 
                variant="primary" 
                style={{ fontFamily: "poppins" }} 
                onClick={openGmail}
              >
                Send with Gmail
              </Button>
              <Button 
                variant="primary" 
                style={{ fontFamily: "poppins" }} 
                onClick={openOutlook}
              >
                Send with Outlook
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};

export default Contact;