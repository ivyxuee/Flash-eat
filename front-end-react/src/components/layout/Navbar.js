import React from 'react';
import '../../styles/navbar.css';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import SignedOutLinks from './SignedOutLinks';
import {connect} from "react-redux";
import SignOutContainer from "../../containers/SignOutContainer";
import { LOGOUT_USER } from '../../actions/userActions';

class NavBarComponent extends React.Component {

  state = {
    user: null,
    page: null
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/currentuser`, {
      method: 'GET',
      credentials: "include"
    })
    .then(response => response.json())
    .then(user => {
          this.setState({user: user});
          console.log("user in nav is ", user)
        }
    ).catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prev USER is ", prevProps.currentUser)
    console.log("this USER is ", this.props.currentUser)

    if(this.props.currentUser !== prevProps.currentUser) {
      // fetch(`http://localhost:3000/api/currentuser`, {
      //   method: 'GET',
      //   credentials: "include"
      // })
      // .then(response => response.json())
      // .then(user => {
      //       console.log("user in update is ", user)
      //       this.setState({user: user});
      //     }
      // ).catch(err => console.log(err));
      this.setState({
        user: this.props.currentUser
      })
    }
  }

  render() {
    const links = (this.state.user ) ?
        <SignOutContainer
            history={this.props.history}
            currentUser={this.state.user}/>
            : <SignedOutLinks/>;

    return (
      
      
        <nav
            className="navbar navbar-expand-lg navbar-dark nav-wrapper black daken-3">
          <Link className="navbar-brand" to="/">
          <span className="cs5500-lable mr-sm-3 d-none d-sm-block text-success">
           Flash Eats
         </span>
          </Link>

        
          <button className="navbar-toggler" type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {links}
          </div>
        </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(NavBarComponent);
