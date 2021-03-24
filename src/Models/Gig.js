import axios from 'axios';
class Gig {
  // COMMENTED OUT FOR NOW TO GET DEPLOYED CORS ISSUES FIGURED OUT
  // static all = (token) => {
  //   return axios.get(`${process.env.REACT_APP_API_URL}/api/gigs`, {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  // };

  static all = (token) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/gigs`);
  };

  static show = (gigId) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/gigs/${gigId}`);
  };

  static update = (gigId, gigFormData) => {
    // you can send GET, POST, PUT, and DELETE all to the same route and get 4 different functionalities
    return axios.put(`${process.env.REACT_APP_API_URL}/api/gigs/${gigId}`, gigFormData);
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
