import axios from 'axios';

class Auth {
  static register = (userData) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/register`, userData);
  };
}

export default Auth;
