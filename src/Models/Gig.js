import axios from 'axios';
class Gig {

  static all = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/gigs`);
  };

  static add = (gigPostFormData, token) => {
    console.log(gigPostFormData, "gig post form data");
    console.log(token, "token");
    return axios.post(`${process.env.REACT_APP_API_URL}/api/gigs`, gigPostFormData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  static show = (gigId, token) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/gigs/${gigId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  static update = (gigId, gigFormData, token) => {
    // you can send GET, POST, PUT, and DELETE all to the same route and get 4 different functionalities
    return axios.put(`${process.env.REACT_APP_API_URL}/api/gigs/${gigId}`, gigFormData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  static destroy = (gigId) => {
    try {
      return axios.delete(`${process.env.REACT_APP_API_URL}/api/gigs/${gigId}`);
    } catch (error) {
      console.log(error, 'ERROR DELETING GIG');
    }
  };
}

export default Gig;
