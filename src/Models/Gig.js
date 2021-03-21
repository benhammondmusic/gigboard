import axios from 'axios';
class Gig {
  static all = () => {
    return axios.get('http://localhost:5000/api/gigs');
  };

  static show = (gigId) => {
    return axios.get(`http://localhost:5000/api/gigs/${gigId}`);
  };

  static update = (gigId, gigFormData) => {
    // you can send GET, POST, PUT, and DELETE all to the same route and get 4 different functionalities
    return axios.put(`http://localhost:5000/api/gigs/${gigId}`, gigFormData);
  };
}

export default Gig;
