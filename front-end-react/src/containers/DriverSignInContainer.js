import React from "react";
import {connect} from "react-redux";
import service from "../services/UserService";
import {
  loginUser
} from "../actions/userActions";
import DriverSignIn from "../components/user/DriverSignIn";

const stateToPropertyMapper = (state) => ({
  authError: state.user.authError
});

const dispatchToPropertyMapper = (dispatch) => ({
  loginUser: (credentials) =>
      service.loginUser(credentials)
      .then(response =>
          dispatch(loginUser(response)))
});

const DriverSignInContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(DriverSignIn);

export default DriverSignInContainer;
