import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ currentUsername, logOut }) => {
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

          <Link to='/newgig' className="link">New Gig</Link>
        </span>

        <span>
          {currentUsername ? (
            <span>
              {currentUsername}
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
