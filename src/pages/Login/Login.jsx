import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {Link} from 'react-router-dom'

const Login = (props) => {
  return (
    <>
      <Form onSubmit={props.handleLogin} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-title">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => props.setCurrentUserEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-title">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => props.setPassword(e.target.value)}/>
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
    <h3>New to Gigboard?</h3>
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
