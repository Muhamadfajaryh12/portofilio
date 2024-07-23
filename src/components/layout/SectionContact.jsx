import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactGlobe from "react-globe";

const SectionContact = () => {
  return (
    <div className="bg-dark p-5" id="contact">
      <h2
        className="text-white text-center fw-bold"
        style={{ letterSpacing: "3px" }}
      >
        - CONTACT US -
      </h2>
      <p
        className="text-white text-center mb-0"
        style={{ letterSpacing: "3px" }}
      >
        Send a message
      </p>
      <div className="p-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-white">Subject Email</Form.Label>
            <Form.Control
              type="text"
              className="bg-dark border-secondary text-secondary"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-white">Body Email</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="bg-dark border-secondary text-secondary"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SectionContact;
