import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (  ) => {

    return (
        <nav>
            <section>
                <Link to="/" class='link'>
                    Home
                </Link>
                <span>    </span>
                <Link to="/gigs" class='link'>
                    Gig List
                </Link>
                <span>    </span>
                <Link to="/login" class='link'>
                    Login
                </Link>
                <span>    </span>
                <Link to="/register" class='link'>
                    Register
                </Link>
            </section>
        </nav>
    )
}

export default Navbar;