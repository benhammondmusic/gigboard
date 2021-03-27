import './GigFull.css';
import GigDelete from '../GigDelete/GigDelete';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { weatherByLocation } from '../../services/weather-api'

const getDisplayDate = (uglyDate) => {
  const dateObj = new Date(uglyDate);

  const options = {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  };

  return dateObj.toLocaleString('en-US', options);
};

const GigFull = (props) => {
  
  const [currentTemp, setCurrentTemp] = useState('');

  const location = props.gig.location.split(/ (.+)/)[0].replace(/[, ]+/g, " ").trim()

  useEffect( async () => {
    let currentWeather = await weatherByLocation(location)
    setCurrentTemp(currentWeather.current.temp_f)
  }, [])
  

  return (
  <>
    <h4 className="full-heading">
      {props.gig.title}: ${props.gig.pay}
    </h4>
    <ul>
      <em>{props.gig.description}</em>
      <hr></hr>
      {props.gig.location ? <li>Location: {props.gig.location}</li> : ''}

      <li>{props.gig.tip ? 'Tips: Yes' : 'No Tips'}</li>
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
      <div style={{color: 'darkblue'}}>
        This is what the current Temperature is in {location}: {currentTemp}°F
      </div>

      <div className="button-container">
        {props.currentUserId === props.gig.User ? (
          <>
            <hr></hr>
            <Link to={`gigs/editgig/${props.gig._id}`} gig={props.gig}>
              <button className="btn btn-dark">Edit</button>
            </Link>
          </>
        ) : (
          ''
        )}
        {props.currentUserId === props.gig.User ? <GigDelete history={props.history} gig={props.gig} /> : ''}
      </div>
    </ul>
  </>
)};

export default GigFull;
