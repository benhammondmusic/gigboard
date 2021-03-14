import { Link } from 'react-router-dom';

const Navbar = (  ) => {

    return (
        <nav>
            <section>
                <Link to="/">
                    Home
                </Link>
                <span>    </span>
                <Link to="/gigs">
                    Gig List
                </Link>
                <span>    </span>
                <Link to="/login">
                    Login
                </Link>
                <span>    </span>
                <Link to="/register">
                    Register
                </Link>
            </section>
        </nav>
    )
}

export default Navbar;