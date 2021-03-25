import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Gig from '../../Models/Gig';

const GigDelete = ({ gig }) => {
  let history = useHistory();

  // delete method
  const deletePost = async () => {
    console.log('GigDelete()', gig);
    //   const response = await axios.delete(`http://localhost:5000/api/gigs/${gig._id}`);

    Gig.destroy(gig._id);

    // redirect ? is there a better method?
    //   history.push(`/gigs`);
    window.location.reload(true); //= '/gigs';
  };

  return (
    <button type="submit" className="btn btn-light" onClick={deletePost}>
      Delete
    </button>
  );
};

export default GigDelete;
