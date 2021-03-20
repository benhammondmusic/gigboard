import './GigFull.css';
import DeletePost from '../GigDelete/GigDelete';

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
      {/* Button to edit the post --need to make it functional & only accesible to the user who made it  */}
      <form action="/articles/<%= article.id %>?_method=DELETE" method="POST" className="edit-button">
        <button type="submit" className="btn btn-outline-dark">Edit</button>
      </form>
      
      {/* Button to delete the post --need to make it functional & only accesible to the user who made it  */}
        <button type="submit" className="btn btn-outline-danger" onClick={DeletePost}>Delete</button>
      </div>

    </ul>
  </>
);
export default GigFull;
