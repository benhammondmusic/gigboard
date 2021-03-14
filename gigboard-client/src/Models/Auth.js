import axios from 'axios';

class Auth {
  
  static register = ( userData ) => {
    return axios.post('http://localhost:3001/api/v1/auth/register', userData );
  }

}

export default Auth;