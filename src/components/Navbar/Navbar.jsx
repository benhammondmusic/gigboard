import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/" className="link">
          Home
        </Link>
        <span> </span>
        <Link to="/gigs" className="link">
          Gig List
        </Link>
        <span> </span>
        <Link to="/login" className="link">
          Login
        </Link>
        <span> </span>
        <Link to="/register" className="link">
          Register
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
