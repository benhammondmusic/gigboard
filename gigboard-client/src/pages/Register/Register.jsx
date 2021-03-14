import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import Auth from '../../Models/Auth'


const Register = () => {

    const history = useHistory()
    
    const [ email, setEmail ] = useState('')
    const [ password, setPasword ] = useState('')
    const [ username, setUsername ] = useState('')

    const [ message, setMessage ] = useState( null );
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const user = await Auth.register({ email, username, password });
          console.log(user)
        //   const token = user.data.signedJwt
    
        //   localStorage.setItem( 'uid', token );
        //   props.setCurrentUser(token);
    
          history.push('/gigs');
          
        } catch (error) {
          setMessage(error.response) 
        }
    
      }
    
    console.log( message );
    
    return (
        <>
        <div>Register</div>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ (e) => setEmail(e.target.value) }/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" onChange={ (e) => setUsername( e.target.value ) }/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ (e) => setPasword( e.target.value ) }/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
  }
  
  export default Register;