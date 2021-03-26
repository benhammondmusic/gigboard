import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Auth from '../../Models/Auth';

const Login = (props) => {
  const history = useHistory();

  // on page load, need to clear any errors that are in App.js state from before
  // props.clearErrors();

  const responseGoogle = async (response) => {
    try {
      const res = await Auth.googleRegister({ email: response.profileObj.email });
      props.setCurrentUserId(res.data.currentUserId);
      props.setCurrentUserEmail(res.data.email);
      localStorage.setItem('jwt', res.data.token);
      history.push('/gigs');
    } catch (error) {
      console.log(error, 'Error registering with Google OAuth');
    }
  };

  const handleGoogleRegisterAndLogin = (e) => {
    console.log('There has been an error with the Google call. Are your cookies enabled?');
  };

  return (
    <div className="LoginForm">
      <h1>Login to Post a Gig</h1>
      <hr></hr>
      <GoogleLogin clientId="372780436632-gk66eu7ttd58g878n81ocf76fe0kva66.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={handleGoogleRegisterAndLogin} />
      <hr></hr>
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

        <span className="error">{props.errorMessage ? 'Error logging in; please check your email and password.' : ''}</span>
      </Form>
      <hr></hr>
      <h4>New Account with Email</h4>
      <Link to="/register" className="link">
        <button id="reg-btn">Register</button>
      </Link>

      <div id="tape"></div>
      <div id="tape2"></div>
    </div>
  );
};

export default Login;
