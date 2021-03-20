import axios from 'axios';

class Auth {
  static register = (userData) => {
    console.log(userData, 'userData in Auth.register');
    return axios.post(`${process.env.REACT_APP_API_URL}/users/register`, userData);
  };
  static login = (userData) => {
    console.log(userData, 'userData in Auth.login');
    return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, userData);
  };
}

export default Auth;
