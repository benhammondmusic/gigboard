import axios from 'axios';
import { useHistory } from 'react-router-dom';

const GigDelete = ({ gig }) => {
  let history = useHistory();

  // delete method
  const deletePost = async () => {
    try {
      console.log('GigDelete()', gig);
      const response = await axios.delete(`http://localhost:5000/api/gigs/${gig._id}`);
      console.log('GIG DELETED! Full response object:', response);

      // redirect ? is there a better method?
      //   history.push(`/gigs`);
      window.location.href = '/gigs';
    } catch (error) {
      console.log(error, 'ERROR IN <GigDelete>.deletePost', gig);
    }
  };

  return (
    <button type="submit" className="btn btn-outline-danger" onClick={deletePost}>
      Delete
    </button>
  );
};

export default GigDelete;
