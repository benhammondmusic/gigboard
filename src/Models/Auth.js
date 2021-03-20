import axios from "axios";

class Auth {
  static register = (userData) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/users/register`, userData);
  };
  static login = (userData) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, userData);
  };
}

export default Auth;
