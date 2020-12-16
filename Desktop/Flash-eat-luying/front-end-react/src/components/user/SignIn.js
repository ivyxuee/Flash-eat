import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/Signin.css';

class SignIn extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    userName: '',
    password: ''
  }

  submitLogin = () => {
    if (!(this.state.userName && this.state.password)) {
      alert("Please provide both userName and password!")
    } else {
      this.props.loginUser(this.state)
      .then( () => {
        if(this.props.authError == null) {
          this.props.history.push('/profile');
        }
        else alert("Please provide valid userName and password!")
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
      
        <div className="container">
          <div className="col-12 mt-5">
          <h1 className='text-center font-italic text-success'>Welcome!</h1>
          <h5 className='text-center font-italic text-success'>Please Sign In</h5>

            <div className="content-wrapper">
              <div className="form-group row cs5500-field cs5500-username">
                <label htmlFor="userName"
                       className="col-sm-2 col-form-label">
                  Username
                </label>
                <div className="col-sm-10">
                  <input className="form-control"
                         id="userName"
                         placeholder="Username"
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row cs5500-field cs5500-password">
                <label htmlFor="password"
                       className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input type="password"
                         className="form-control"
                         id="password"
                         placeholder="password"
                         onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                  <div className="row mb-3 ">
                    <div className="col-sm-5 cs5500-login-btn mr-3">
                      <a className="btn btn-primary btn-block cs5500-button cs5500-login mb-3"
                         onClick={this.submitLogin}
                         role="button">
                          Sign in
                      </a>
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
                    <div className="col-4 cs5500-link cs5500-forgot-password">
                      {/* <a href="#" role="button">Forgot Password?</a> */}
                      <Link className="float-left"
                            to="/retrivepassword"
                            role="button">
                        Forgot Password?
                      </Link>
                    </div>
                    {/* <Link className="float-left"
                            to="/retrivepassword"
                            role="button">
                        Forgot Password?
                      </Link> */}


                    <div className="col-6 cs5500-link cs5500-register ">
                      
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
          <h6 className='text-center text-success'>Copyright@Flash-Eats</h6>
        </div>
    )
  }
}

export default SignIn;
