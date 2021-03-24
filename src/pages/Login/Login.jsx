import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Auth from '../../Models/Auth';

const Login = (props) => {
  const history = useHistory();

  const responseGoogle = async (response) => {
    try {
      console.log(response, 'this is the response from login in with google');

      const res = await Auth.googleRegister({ email: response.profileObj.email });
      console.log(res, 'new googleRegistered user');
      props.setCurrentUserId(res.data.currentUserId);
      props.setCurrentUserEmail(response.profileObj.email);
      localStorage.setItem('jwt', response.tokenId)
      history.push('/gigs');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleRegisterAndLogin = (e) => {
    console.log('There has been an error with the Google call');
  };

  return (
    <div className="LoginForm">
      <h1>Login - Gig Poster</h1>
      <h4>Use Your Google Account</h4>
      <GoogleLogin clientId="372780436632-gk66eu7ttd58g878n81ocf76fe0kva66.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={handleGoogleRegisterAndLogin} />

      <h4>Existing Account with Email</h4>
      <Form onSubmit={props.handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-title">Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" onChange={(e) => props.setFormEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-title">Password</Form.Label>
          <Form.Control required type="password" placeholder="Enter Password" onChange={(e) => props.setFormPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" id="login-btn">
          Log In
        </Button>
      </Form>
      <h4>New Account with Email</h4>
      {/* <h4>Register to Post a Gig</h4> */}
      <Link to="/register" className="link">
        <button id="reg-btn">Register</button>
      </Link>

      <div id="tape"></div>
      <div id="tape2"></div>
    </div>
  );
};

export default Login;
