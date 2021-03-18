import { Button, Form } from 'react-bootstrap';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

import Auth from '../../Models/Auth';



const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

    //     const user = await Auth.login({email, password})
    //     const token = user.data.signedJwt

    //     localStorage.setItem( 'uid', token );

    //     // props.setCurrentUser(token);

        history.push('/gigs');
        
    } catch (error) {
       console.log(error)
    }
  }



  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-title">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-title">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" id="login-btn">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
