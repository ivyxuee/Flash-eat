import React from 'react';
import { NavLink} from "react-router-dom";

class SignedInLinks extends React.Component {
  logout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
        <ul className="navbar-nav right">
          <li className="nav-item nav-link mr-2"><NavLink to='/search'>Restaurants</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/signup'>Drivers</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/profile'>Profile</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/' onClick={this.logout}>Log Out</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/privacy'>Privacy Policy</NavLink></li>
          <li className="nav-item nav-link mr-2"><NavLink to='/' className='btn btn-floating pink lighten-1'>{this.props.currentUser.userName}</NavLink></li>
        </ul>
    )
  }

}

export default SignedInLinks;
