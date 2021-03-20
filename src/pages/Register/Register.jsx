import { useState } from 'react';

// import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Auth from '../../Models/Auth'

const Register = (props) => {
  return (
    <>
      <Form onSubmit={props.handleRegister}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-title">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => props.setFormEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-title">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => props.setFormPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" id="login-btn">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
