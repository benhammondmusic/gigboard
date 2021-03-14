import axios from 'axios';

class Auth {
  
  static register = ( userData ) => {
    return axios.post('http://localhost:3001/register', userData );
  }

}

export default Auth;