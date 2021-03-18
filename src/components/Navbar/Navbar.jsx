import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ currentUser, logOut }) => {

  console.log(currentUser)
  return (
    <nav>
      <section className="d-flex px-3 justify-content-between">
        <span className="d-flex w-50 no-wrap">
          <Link to="/" className="link">
            Home
          </Link>

          <Link to="/gigs" className="link">
            Gig List
          </Link>

        {currentUsername ? (

          <Link to='/newgig' className="link">Add Gig</Link>
        ): (<span></span>)}
        </span>

        <span>
          {currentUser ? (
            <span>
              {currentUser}
              <button className="btn btn-outline-dark" onClick={logOut}>
                Log Out
              </button>
            </span>
          ) : (
            <span>
              <Link to="/login" className="link">
                Login
              </Link>
            </span>
          )}
        </span>
      </section>
    </nav>
  );
};

export default Navbar;
