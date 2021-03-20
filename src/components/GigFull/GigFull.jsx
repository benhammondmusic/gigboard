import './GigFull.css';

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

      {/* Button to edit the post --need to make it functional & only accesible to the user who made it  */}
      <form action="/articles/<%= article.id %>?_method=DELETE" method="POST" class="d-inline align-right">
        <button type="submit" class="btn btn-outline-dark">Edit</button>
      </form>
      
      {/* Button to delete the post --need to make it functional & only accesible to the user who made it  */}
      <form action="/articles/<%= article.id %>?_method=DELETE" method="POST" class="d-inline align-right">
        <button type="submit" class="btn btn-outline-danger">Delete</button>
      </form>

    </ul>
  </>
);
export default GigFull;
