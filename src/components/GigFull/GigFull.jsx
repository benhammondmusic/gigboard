import './GigFull.css';
import GigDelete from '../GigDelete/GigDelete';
import { Link } from 'react-router-dom';

const GigFull = (props) => (
  <>
    <h4>
      {props.gig.title}: {props.gig.description}...
    </h4>
    <ul>
      {Object.entries(props.gig).map((detail) => {
        return (
          <li key={detail}>
            {detail ? (
              <span className="detail">
                {detail[0]}: <strong>{detail[1]}</strong>
                <strong>{detail[1] === true ? 'YES' : ''}</strong>
              </span>
            ) : (
              ''
            )}
          </li>
        );
      })}
      <div className="button-container">
        {/* Button to go to edit the gig page --need to make it functional & only accessible to the user who made it  */}
        <Link to={`gigs/editgig/${props.gig._id}`} gig={props.gig}>
          <button className="btn btn-outline-dark">Edit</button>
        </Link>

        {/* Button to delete the post --need to make it functional & only accessible to the user who made it  */}
        <GigDelete history={props.history} gig={props.gig} />
      </div>
    </ul>
  </>
);
export default GigFull;
