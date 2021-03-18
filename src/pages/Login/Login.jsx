import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {Link} from 'react-router-dom'

import Auth from '../../Models/Auth';

const Login = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-title">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-title">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" id="login-btn">
          Submit
        </Button>
      </Form>

      <div id='tape'>
</div>
<div id='tape2'>
</div>


<div className='reg-container'>
    <h3>New to Gig Board?</h3>
      <Link to="/register" className="link">
                <button id='reg-btn'>
                  Register Here
                  </button>
              </Link>

    </div>    
    </>
  );
};

export default Login;
