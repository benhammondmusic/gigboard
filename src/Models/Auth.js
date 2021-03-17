import axios from 'axios';

class Auth {
  
  static register = ( userData ) => {
    return axios.post('http://localhost:5000/register', userData );
  }

}

export default Auth;