import './GigFull.css';
import GigDelete from '../GigDelete/GigDelete';
import { Link } from 'react-router-dom';

const GigFull = (props) => (
  <>
    <h4>{props.gig.title}:</h4>
    <ul>
      {/* <li >User: {props.gig.User}</li> */}
      <em>{props.gig.description}</em>
      {props.gig.location ? <li>location: {props.gig.location}</li> : ''}

      <li>{props.gig.tip ? '$ tips $' : 'no tips'}</li>
      {props.gig.urgency ? <li>urgency: {props.gig.urgency}</li> : ''}
      {props.gig.workStartDate ? <li>workStartDate: {props.gig.workStartDate}</li> : ''}
      {props.gig.workEndDate ? <li>workEndDate: {props.gig.workEndDate}</li> : ''}
      {props.gig.expirationDate ? <li>expirationDate: {props.gig.expirationDate}</li> : ''}
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
    

        {console.log(props.currentUserId, 'currentUserId')}
        {console.log(props.gig.User, 'gig ')}
        {props.currentUserId === props.gig.User ? <GigDelete history={props.history} gig={props.gig} /> : ''}
        {props.currentUserId === props.gig.User ? <Link to={`gigs/editgig/${props.gig._id}`} gig={props.gig}>
          <button className="btn btn-outline-dark">Edit</button>
        </Link> : ''} 
      </div>
      <i>Logged In User Id (delete this line): {props.currentUserId}</i>
    </ul>
  </>
);
export default GigFull;
