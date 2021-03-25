import { useState } from 'react';

// import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import './Register.css'

// import Auth from '../../Models/Auth'

const Register = (props) => {
  return (
    <>
     
      <Form onSubmit={props.handleRegister} className="registerForm">
      <h4>Register A New Gig Poster</h4>
      <hr />
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-title">Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" onChange={(e) => props.setFormEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-title">Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" onChange={(e) => props.setFormPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" id="login-btn">
          Register
        </Button>
        <Link to="/login" className="btn btn-secondary reg-cancel">
          Cancel
        </Link>
      </Form>
    </>
  );
};

export default Register;
