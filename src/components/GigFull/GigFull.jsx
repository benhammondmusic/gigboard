import './GigFull.css';
import DeletePost from '../GigDelete/GigDelete';
import {Link} from 'react-router-dom'

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
<<<<<<< HEAD
      {/* Button to edit the post --need to make it functional & only accesible to the user who made it  */}
      <form action="/articles/<%= article.id %>?_method=DELETE" method="POST" to="{`/gigs/editgig/${gig.GigId}`}" className="edit-button">
        <button type="submit" className="btn btn-outline-dark">Edit</button>
      </form>
=======
      {/* Button to go to edit the gig page --need to make it functional & only accesible to the user who made it  */}
        <Link to={`gigs/editgig/${gig._id}`}><button className="btn btn-outline-dark">Edit</button></Link>
>>>>>>> develop
      
      {/* Button to delete the post --need to make it functional & only accesible to the user who made it  */}
        <button type="submit" className="btn btn-outline-danger" onClick={DeletePost}>Delete</button>
      </div>

    </ul>
  </>
);
export default GigFull;
