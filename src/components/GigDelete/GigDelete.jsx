import Gig from '../../Models/Gig';

const GigDelete = ({ gig }) => {
  // delete method
  const deletePost = async () => {
    Gig.destroy(gig._id);
    // redirect ? is there a better method?
    window.location.reload(true); //= '/gigs';
  };

  return (
    <button type="submit" className="btn btn-light" onClick={deletePost}>
      Delete
    </button>
  );
};

export default GigDelete;
