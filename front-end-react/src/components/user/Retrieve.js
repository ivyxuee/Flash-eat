import React from 'react';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import '../../styles/Signin.css';

class Retrieve extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    userName: '',
    firstName: '',
    lastName: '',
    email: ""
  }

  submitLogin = () => {
    if (!(this.state.userName && this.state.firstName && this.state.lastName && this.state.email)) {
      alert("Please provide all required information or directly contact us flash_eat@gmail.com!")
    } else {
        alert("Please check your email account with reset-password link!")
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };

  render() {
    return (
      
        <div className="container">
          <div className="col-12 mt-5">
            <h1 className='text-center'>Retrieve your password</h1>

            <div className="content-wrapper">
              <div className="form-group row cs5500-field cs5500-username">
                <label htmlFor="userName"
                       className="col-sm-2 col-form-label">
                  Username
                </label>
                <div className="col-sm-9">
                  <input className="form-control"
                         id="userName"
                         placeholder="Alice"
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row cs5500-field cs5500-username">
                <label htmlFor="firstName"
                       className="col-sm-2 col-form-label">
                  First Name
                </label>
                <div className="col-sm-9">
                  <input className="form-control"
                         id="firstName"
                         placeholder="Please enter your First Name"
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row cs5500-field cs5500-username">
                <label htmlFor="lastName"
                       className="col-sm-2 col-form-label">
                  Last Name
                </label>
                <div className="col-sm-9">
                  <input className="form-control"
                         id="lastName"
                         placeholder="Please enter your Last Name"
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row cs5500-field cs5500-username">
                <label htmlFor="email"
                       className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-9">
                  <input className="form-control"
                         id="email"
                         placeholder="alice@wonderland.com"
                         onChange={this.handleChange}/>
                </div>
              </div>
              
              <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                  <div className="row mb-3">
                    <div className="col-sm-5 cs5500-login-btn mr-3">
                      {/* <a className="btn btn-primary btn-block cs5500-button cs5500-login mb-3"
                         onClick={this.submitLogin}
                         role="button">
                          Submit
                      </a> */}
                      <Link to="/"
                            className="btn btn-primary btn-block"
                            onClick={this.submitLogin}
                            role="button">
                            
                        SUBMIT
                      </Link>
                    </div>

                    <div className="col-sm-5 cs5500-login-btn">
                      <Link to="/"
                            className="btn btn-warning btn-block"
                            role="button">
                        Cancel
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                  <div className="col-6 cs5500-link cs5500-register">
                      <Link className="float-left"
                            to="/login"
                            role="button">
                        Already have an account? Click here to sign in!
                      </Link>
                    </div>

                    <div className="col-6 cs5500-link cs5500-register">
                      <Link className="float-right"
                            to="/signup"
                            role="button">
                        Sign up
                      </Link>
                    </div>
                  </div>
                  {this.props.authError ?
                  <div className="alert alert-danger text-center" role="alert">
                     {this.props.authError}
                  </div> : null }
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
    )
  }
}

export default Retrieve;
