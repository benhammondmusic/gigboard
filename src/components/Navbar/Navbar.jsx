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

              <Link to="/register" className="link">
                Register
              </Link>
            </span>
          )}
        </span>
      </section>
    </nav>
  );
};

export default Navbar;
