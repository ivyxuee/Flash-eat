import React from 'react';
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';

class EditProfile extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    user: this.props.user,
    editingMode: false,
  };

  saveChanges = () => {
    console.log(this.state.user);
    this.props.updateUser(this.state.user)
    .then(() => {
      this.setState(
          (prevState) => ({
            ...prevState,
            editingMode: false
          })
      )
    })
  }

  editProfile = () => {
    this.setState(
        (prevState) => ({
          ...prevState,
          editingMode: true
        })
    )
  }

  handleChange = (e) => {
    const userField = e.target.id;
    const userFieldValue = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [userField]: userFieldValue,
      }
    }))
  };

  render() {
    return (

        <div className="content-wrapper col-10 offset-1 mb-2">
          <div className="form-group row cs5500-field cs5500-username">
            <label htmlFor="userName"
                   className="col-sm-3 col-form-label">
              Username
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input className="form-control"
                           id="userName"
                           value={this.state.user.userName}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.userName}</div>
              }
            </div>
          </div>
          <div className="form-group row cs5500-field cs5500-password">
            <label htmlFor="password"
                   className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input type="password"
                           className="form-control"
                           id="password"
                           value={this.state.user.password}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.password}</div>
              }

            </div>
          </div>
          {
            this.state.editingMode &&
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
          }
          <div className="form-group row cs5500-field">
            <label htmlFor="firstName"
                   className="col-sm-3 col-form-label">
              First Name
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input type="text"
                           className="form-control"
                           id="firstName"
                           value={this.state.user.firstName}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.firstName}</div>
              }

            </div>
          </div>

          <div className="form-group row cs5500-field">
            <label htmlFor="lastName"
                   className="col-sm-3 col-form-label">
              Last Name
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input type="text"
                           className="form-control"
                           id="lastName"
                           value={this.state.user.lastName}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.lastName}</div>
              }

            </div>
          </div>

          <div className="form-group row cs5500-field ">
            <label htmlFor="phone"
                   className="col-sm-3 col-form-label">
              Phone
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input type="tel"
                           className="form-control"
                           id="phone"
                           value={this.state.user.phone}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.phone}</div>
              }

            </div>
          </div>

          <div className="form-group row cs5500-field ">
            <label htmlFor="email"
                   className="col-sm-3 col-form-label">
              Email
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input type="email"
                           className="form-control"
                           id="email"
                           value={this.state.user.email}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.email}</div>
              }

            </div>
          </div>

          <div className="form-group row cs5500-field ">
            <label htmlFor="address"
                   className="col-sm-3 col-form-label">
              Address
            </label>
            <div className="col-sm-9">
              {
                this.state.editingMode ?
                    <input type="text"
                           className="form-control"
                           id="address"
                           value={this.state.user.address}
                           onChange={this.handleChange}/>
                    :
                    <div
                        className="cs5500-user-info">{this.state.user.address}</div>
              }

            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3"></label>
            <div className="col-sm-9">

              <div className="row">

                {
                  this.state.editingMode ?
                      <div className="col-sm-5 cs5500-login-btn mr-3">
                        <a className="btn btn-primary btn-block cs5500-button cs5500-register mb-3"
                           onClick={this.saveChanges}
                           role="button">
                          Save
                        </a>
                      </div> :
                      <div className="col-sm-5 cs5500-login-btn mr-3">
                        <a className="btn btn-primary btn-block cs5500-button cs5500-register mb-3"
                           onClick={this.editProfile}
                           role="button">
                          Edit
                        </a>
                      </div>
                }


                <div className="col-sm-5 cs5500-login-btn">
                  <Link to="/"
                        className="btn btn-danger btn-block"
                        role="button">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default EditProfile;
