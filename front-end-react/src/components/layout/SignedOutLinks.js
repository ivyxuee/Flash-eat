import React from 'react';
import { NavLink} from "react-router-dom";


class SignedOutLinks extends React.Component {
  render() {
    return (
        <ul className="navbar-nav right">
          <li className="nav-item nav-link mr-2"><NavLink
              to='/search'>Restaurants</NavLink></li>
              <li className="nav-item nav-link mr-2"><NavLink
              to='/driver'>Drivers</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink
              to='/profile'>Profile</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/login'>Sign
            In</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/signup'>Sign
            Up</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/privacy'>Privacy Policy</NavLink></li>
        </ul>
    )
  }
}

export default SignedOutLinks;
