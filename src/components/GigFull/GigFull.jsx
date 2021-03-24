import './GigFull.css';
import GigDelete from '../GigDelete/GigDelete';
import { Link } from 'react-router-dom';

const getDisplayDate = (uglyDate) => {
  const dateObj = new Date(uglyDate);
  console.log(dateObj, 'DATE', typeof dateObj);

  const options = {
    // weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  };

  return dateObj.toLocaleString('en-US', options);

  // console.log(localeDate.split(' '), 'LOCALE DATE');

  // displayDateObj = {
  //   weekday: localeDate[0],
  //   month: localeDate[1],
  //   day: localeDate[2],
  //   year: localeDate[3],
  // };

  // return uglyDate.toLocaleString('en-US', options)
};

const GigFull = (props) => (
  <>
    <h4>{props.gig.title}:</h4>
    <ul>
      {/* <li >User: {props.gig.User}</li> */}
      <em>{props.gig.description}</em>
      {props.gig.location ? <li>location: {props.gig.location}</li> : ''}

      <li>{props.gig.tip ? '$ tips $' : 'no tips'}</li>
      {props.gig.urgency ? <li>urgency: {props.gig.urgency}</li> : ''}
      {props.gig.workStartDate ? <li>Gig Date: {getDisplayDate(props.gig.workStartDate)}</li> : ''}
      {props.gig.workEndDate ? <li>End Date: {props.gig.workEndDate}</li> : ''}
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
        {/* Button to go to edit the gig page --need to make it functional & only accessible to the user who made it  */}

        <Link to={`gigs/editgig/${props.gig._id}`} gig={props.gig}>
          <button className="btn btn-outline-dark">Edit</button>
        </Link>

        {console.log(props.currentUserId, 'currentUserId')}
        {console.log(props.gig.User, 'gig ')}
        {props.currentUserId === props.gig.User ? <GigDelete history={props.history} gig={props.gig} /> : ''}
      </div>
      <i>Logged In User Id (delete this line): {props.currentUserId}</i>
    </ul>
  </>
);
export default GigFull;
