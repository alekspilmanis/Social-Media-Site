import { Outlet, Link } from "react-router-dom";
import UserContext from "../../context/userContext.js";
import { useContext, Fragment } from "react";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const authenticated = (
    <Fragment>
      <h2>Hi, { user.username }</h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome!</h2>
    </Fragment>
  )

  //Navbar if user not logged in 
  const guestNav = (
    <Fragment>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
             <Link className="nav-link text-light" to="/">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">Register</Link>
            </li>
        </ul>
      </div>
    </Fragment>
  )

  //Navbar if user is logged in
  const authNav = (
    <Fragment>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/profile">Profile</Link>
            </li>
        </ul>
      </div>
    </Fragment>
  )

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                  { user.authenticated ? authenticated : guest}
                  <Link className="navbar-brand text-white" to="/">Social Media Project</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  { user.authenticated ? authNav : guestNav}
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;