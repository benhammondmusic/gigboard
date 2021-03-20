import axios from 'axios';
class Gig {

    static all = () => {
        return axios.get('http://localhost:5000/api/gigs');
    }

    static show = ( gigId ) => {
        return axios.get(`http://localhost:5000/api/gigs/${gigId}`)
    }

}

export default Gig;