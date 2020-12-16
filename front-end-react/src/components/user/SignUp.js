import React from 'react';
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';
import $ from "jquery";
import {connect} from "react-redux";

class SignUp extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    verifyPassword: '',
    phone: '',
    email: '',
    address: ''
  };

  registerNewUser = () => {
    if (!(this.state.userName && this.state.password)) {
      alert("Please provide the valid userName and password!")
    } else if (this.state.password !== this.state.verifyPassword) {
      alert("Password does not match!")
    }else {
      this.props.createUser(this.state)
      .then( () => {
            console.log("Successfully created a new user");
            this.props.history.push('/profile');
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };

  render() {
    return (
        <div className="container login-wrapper">
          <div className="col-md-12  mt-5">
        
            <h1 className="text-center">Sign Up</h1>

            <div className="content-wrapper">
              <div className="form-group row cs5500-field cs5500-username">
                <label htmlFor="userName"
                       className="col-sm-3 col-form-label">
                  Username
                </label>
                <div className="col-sm-9">
                  <input className="form-control"
                         id="userName"
                         placeholder="Alice"
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row cs5500-field cs5500-password">
                <label htmlFor="password"
                       className="col-sm-3 col-form-label">
                  Password
                </label>
                <div className="col-sm-9">
                  <input type="password"
                         className="form-control"
                         id="password"
                         placeholder="123qwe#$%"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row cs5500-field cs5500-password-verify">
                <label htmlFor="verifyPassword"
                       className="col-sm-3 col-form-label">
                  Verify Password
                </label>
                <div className="col-sm-9">
                  <input type="password"
                         className="form-control"
                         id="verifyPassword"
                         placeholder="123qwe#$%"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row cs5500-field">
                <label htmlFor="firstName"
                       className="col-sm-3 col-form-label">
                  First Name
                </label>
                <div className="col-sm-9">
                  <input type="text"
                         className="form-control"
                         id="firstName"
                         placeholder="Alice"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row cs5500-field">
                <label htmlFor="lastName"
                       className="col-sm-3 col-form-label">
                  Last Name
                </label>
                <div className="col-sm-9">
                  <input type="text"
                         className="form-control"
                         id="lastName"
                         placeholder="Wonderland"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row cs5500-field ">
                <label htmlFor="phone"
                       className="col-sm-3 col-form-label">
                  Phone
                </label>
                <div className="col-sm-9">
                  <input type="tel"
                         className="form-control"
                         id="phone"
                         placeholder="123-456-7890"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row cs5500-field ">
                <label htmlFor="email"
                       className="col-sm-3 col-form-label">
                  Email
                </label>
                <div className="col-sm-9">
                  <input type="email"
                         className="form-control"
                         id="email"
                         placeholder="alice@wonderland.com"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row cs5500-field ">
                <label htmlFor="address"
                       className="col-sm-3 col-form-label">
                  Address
                </label>
                <div className="col-sm-9">
                  <input type="text"
                         className="form-control"
                         id="address"
                         placeholder="123 Street Name, City Name, State, ZipCode"
                         onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">

                  <div className="row">
                    <div className="col-sm-8 cs5500-login-btn mr-3">
                      <a className="btn btn-primary btn-block cs5500-button cs5500-register mb-3"
                         onClick={this.registerNewUser}
                         role="button">
                        Sign up
                      </a>
                    </div>

                    <div className="col-sm-3 cs5500-login-btn">
                      <Link to="/"
                            className="btn btn-danger btn-block"
                            role="button">
                        Cancel
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <Link className="float-left cs5500-link cs5500-login"
                            to="/login"
                            role="button">
                        Login
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.user.users
  }
}

export default connect(mapStateToProps)(SignUp);
