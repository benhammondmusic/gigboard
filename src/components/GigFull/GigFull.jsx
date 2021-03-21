import './GigFull.css';
import GigDelete from '../GigDelete/GigDelete';
import { Link } from 'react-router-dom';

const GigFull = ({ gig }) => (
  <>
    <h4>
      {gig.title}: {gig.description}...
    </h4>
    <ul>
      {Object.entries(gig).map((detail) => {
        return (
          <li key={detail}>
            {detail ? (
              <span className="detail">
                {detail[0]}: <strong>{detail[1]}</strong>
              </span>
            ) : (
              ''
            )}
          </li>
        );
      })}
      <div className="button-container">
        {/* Button to go to edit the gig page --need to make it functional & only accessible to the user who made it  */}
        <Link to={`gigs/editgig/${gig._id}`} gig={gig}>
          <button className="btn btn-outline-dark">Edit</button>
        </Link>

        {/* Button to delete the post --need to make it functional & only accessible to the user who made it  */}
        <GigDelete gig={gig} />
      </div>
    </ul>
  </>
);
export default GigFull;
