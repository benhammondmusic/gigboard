import axios from "axios";
class Gig {
  static all = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/gigs`);
  };

  static add = async (gigPostFormData, token) => {
    console.log(gigPostFormData, "gig post form data");
    console.log(token, "token");
    const postResponse = await axios.post(`${process.env.REACT_APP_API_URL}/api/gigs`, {
      gigPostFormData,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    await console.log(postResponse, "post response");
    return postResponse;
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
      console.log(error, "ERROR DELETING GIG");
    }
  };
}

export default Gig;
