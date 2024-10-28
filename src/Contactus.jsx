import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="cotactusedit">
      <h1>Thanks For Shopping With Us</h1>
      <Container className="mt-5">
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
