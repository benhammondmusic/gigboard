import axios from 'axios';

class Auth {
  static register = (userData) => {
    return axios.post(`${REACT_APP_API_URL}/register`, userData);
  };
}

export default Auth;
