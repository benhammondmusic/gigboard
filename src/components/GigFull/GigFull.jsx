import './GigFull.css';
import GigDelete from '../GigDelete/GigDelete';
import { Link } from 'react-router-dom';

const getDisplayDate = (uglyDate) => {
  const dateObj = new Date(uglyDate);

  const options = {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  };

  return dateObj.toLocaleString('en-US', options);
};

const GigFull = (props) => (
  <>
    <h4>{props.gig.title}:</h4>
    <ul>
      <em>{props.gig.description}</em>
      {props.gig.location ? <li>Location: {props.gig.location}</li> : ''}
      {props.gig.pay ? <li>Pay: ${props.gig.pay}</li> : ''}
      <li>{props.gig.tip ? 'Tips: Yes' : 'Tips: No'}</li>
      {props.gig.urgency ? <li>Urgency: {props.gig.urgency}</li> : ''}
      {props.gig.workStartDate ? <li>Gig Date: {getDisplayDate(props.gig.workStartDate)}</li> : ''}
      {props.gig.workEndDate ? <li>End Date: {getDisplayDate(props.gig.workEndDate)}</li> : ''}
      {props.gig.tags.length ? (
        <li>
          {props.gig.tags.map((tag) => (
            <span key={tag} className="tag">
              {' #'}
              {tag}
            </span>
          ))}
        </li>
      ) : (
        ''
      )}

      <div className="button-container">
        {props.currentUserId === props.gig.User ? (
          <Link to={`gigs/editgig/${props.gig._id}`} gig={props.gig}>
            <button className="btn btn-dark">Edit</button>
          </Link>
        ) : (
          ''
        )}
        {props.currentUserId === props.gig.User ? <GigDelete history={props.history} gig={props.gig} /> : ''}
      </div>
    </ul>
  </>
);
export default GigFull;
