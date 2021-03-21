import axios from 'axios';
class Gig {
  static all = () => {
    return axios.get('http://localhost:5000/api/gigs');
  };

  static show = (gigId) => {
    return axios.get(`http://localhost:5000/api/gigs/${gigId}`);
  };

  static update = (gigId, gigFormData) => {
    // REMOVED trailing "/update" since it's a PUT request
    // you can send GET, POST, PUT, and DELETE all to the same route and get 4 different functionalities
    return axios.put(`http://localhost:5000/api/gigs/${gigId}`, gigFormData);
  };

  static destroy = async (gigId) => {
    console.log('DELETING GIG: ', gigId);

    try {
      const response = await axios.delete(`http://localhost:5000/api/gigs/${gigId}`);
      console.log('DELETED GIG:', gigId);
    } catch (error) {
      console.log('ERROR DELETING GIG');
    }
  };
}

export default Gig;
