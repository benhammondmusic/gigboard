import { Link } from 'react-router-dom';
import './Navbar.css';
import userIcon from '../../images/user-icon.png';

const Navbar = ({ currentUserEmail, logOut }) => {
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

          {currentUserEmail ? (
            <Link to="/newgig" className="link">
              Add Gig
            </Link>
          ) : (
            <span></span>
          )}
        </span>

        <span className="loggedInUserBar">
          <img src={userIcon} alt="user icon" height={16} width={16} />
          {currentUserEmail ? (
            <span>
              <span className="loggedInUserLetter">{currentUserEmail[0]}</span>
              <button className="logoutBtn" onClick={logOut}>
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
