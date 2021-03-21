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

<<<<<<< HEAD
<<<<<<< HEAD
    static update = ( gigId, gigFormData ) => {
        return axios.put(`http://localhost:5000/api/gigs/${gigId}`, gigFormData)
    } 
=======
  static destroy = async (gigId) => {
    console.log('DELETING GIG: ', gigId);

=======
  static destroy = (gigId) => {
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
    try {
      return axios.delete(`http://localhost:5000/api/gigs/${gigId}`);
    } catch (error) {
      console.log(error, 'ERROR DELETING GIG');
    }
  };
<<<<<<< HEAD
>>>>>>> 52f1bcd4f394a213d09be7ae84683c7dcba5019a
=======
>>>>>>> 710ca680ec19b6d45dd7ccab1c03da46c0a1e911
}

export default Gig;
