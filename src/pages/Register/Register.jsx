import { useState } from 'react';

// import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// import Auth from '../../Models/Auth'


const Register = (props) => {

    return (
        <>
        <div>Register</div>
        <Form onSubmit={props.handleRegister}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ (e) => props.setEmail(e.target.value) }/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" onChange={ (e) => props.setUsername( e.target.value ) }/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ (e) => props.setPassword( e.target.value ) }/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
  }
  
  export default Register;